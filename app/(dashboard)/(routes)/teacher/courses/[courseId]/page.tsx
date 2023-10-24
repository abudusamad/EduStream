<<<<<<< HEAD
import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { LayoutDashboard } from "lucide-react";
import { redirect } from "next/navigation";
import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
=======
import { auth } from "@clerk/nextjs";

import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { CircleDollarSign, File, LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";
import { CategoryForm } from "./_components/category-form";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form";
import { TitleForm } from "./_components/title-form";
import { PriceForm } from "./_components/price-form";
import { AttachmentForm } from "./_components/attachment-form";
import { ChaptersForm } from "./_components/chapters-form";
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
	const { userId } = auth();
	if (!userId) {
		return redirect("/");
	}
<<<<<<< HEAD
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
=======
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

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
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
<<<<<<< HEAD
		course.categoryId,
		course.chapters.some((chapter) => chapter.isPublished),
	];
	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;
=======
		course.price,
		course.categoryId,
		course.chapters.some(chapter =>chapter.isPublished),

	];

	const totalFields = requiredFields.length;
	const completedFields = requiredFields.filter(Boolean).length;

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
	const completionText = `(${completedFields}/${totalFields})`;
	return (
		<div className="p-6">
			<div className="flex items-center justify-between">
<<<<<<< HEAD
				<div className="flex flex-col gap-x-2">
					<h2 className="text-2xl font-medium">Course Setup</h2>
					<span className="text-sm text-slate-700">
						Complete alll fields {completionText}
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 ">
=======
				<div className="flex flex-col gap-y-2 ">
					<h1 className="text-2xl font-medium">Course setup</h1>
					<span className="text-sm text-slate-700">
						complete all fileds{completionText}
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
				<div>
					<div className="flex items-center gap-x-2">
						<IconBadge icon={LayoutDashboard} />
						<h2 className="text-xl">Customize your course</h2>
<<<<<<< HEAD
                    </div>
                    <TitleForm
                        initialData={course}
                        courseId={params.courseId}
                    />
                    <DescriptionForm
                        initialData={course}
                        courseId={params.courseId}
                    />
=======
					</div>
					<TitleForm initialData={course} courseId={course.id} />
					<DescriptionForm initialData={course} courseId={course.id} />
					<ImageForm initialData={course} courseId={course.id} />
					<CategoryForm
						initialData={course}
						courseId={course.id}
						options={categories.map((category) => ({
							label: category.name,
							value: category.id,
						}))}
					/>
				</div>
				<div className="space-y-6">
					<div>
						<div className="flex items-center gap-x-2">
							<IconBadge icon={ListChecks} />
							<h2 className="text-xl">Course chapters </h2>
						</div>
					</div>
					<ChaptersForm initialData={course} courseId={course.id} />
					<div>
						<div className="flex items-center gap-x-2">
							<IconBadge icon={CircleDollarSign} />
							<h2 className="text-xl">Sell your course</h2>
						</div>
						<PriceForm initialData={course} courseId={course.id} />
					</div>
					<div>
						<div className="flex items-center gap-x-2">
							<IconBadge icon={File} />
							<h2 className="text-xl">Course Attachment</h2>
						</div>
						<AttachmentForm initialData={course} courseId={course.id} />
					</div>
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
				</div>
			</div>
		</div>
	);
};

export default CourseIdPage;
