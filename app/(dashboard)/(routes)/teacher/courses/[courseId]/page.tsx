import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
	const { userId } = auth();
	if (!userId) {
		return redirect("/");
	}
	const course = await db.course.findUnique({
		where: {
			id: params.courseId,
			userId,
		},
		include: {
			chapters: {
				orderBy: {
					position: "asc",
				},
			},
			attachments: {
				orderBy: {
					createdAt: "desc",
				},
			},
		},
	});
	const categories = await db.category.findMany({
		orderBy: {
			name: "asc",
		},
	});
	if (!course) {
		return redirect("/");
	}
	const requiredFields = [
		course.title,
		course.description,
		course.imageUrl,
		course.categoryId,
		course.chapters.some((chapter) => chapter.isPublished),
	];
	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;
	const completionText = `(${completedFields}/${totalFields})`;
	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
				<div className="flex flex-col gap-x-2">
					<h2 className="text-2xl font-medium">Course Setup</h2>
					<span className="text-sm text-slate-700">
						Complete alll fields {completionText}
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 ">
				<div>
					<div className="flex items-center gap-x-2">
						<IconBadge icon={LayoutDashboard} />
						<h2 className="text-xl">Customize your course</h2>
                    </div>
                    <TitleForm
                        initialData={course}
                        courseId={params.courseId}
                    />
                    <DescriptionForm
                        initialData={course}
                        courseId={params.courseId}
                    />
				</div>
			</div>
		</div>
	);
};

export default CourseIdPage;
