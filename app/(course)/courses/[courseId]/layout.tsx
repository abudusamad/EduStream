import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseNavbar } from "./_components/course-navbar";

const CourseLayout = async ({
    children,
    params,
}: {
    children: React.ReactNode;
    params: {
        courseId: string;
    };
}) => {
    const { userId } = auth();
    if (!userId) {
        return redirect("/");
    }
    const course = await db.course.findUnique({
        where: {
            id: params.courseId,
        },
        include: {
            chapters: {
                where: {
                    isPublished: true,
                },
                include: {
                    userProgress: {
                        where: {
                            userId,
                        },
                    },
                },
                orderBy: {
                    position: "asc",
                },
            },
        },
    });
    
    if (!course) {
        return redirect("/")
    }

    const progressCount = await getProgress(userId, course.id);

	return (
        <div>
            <div>
                <CourseNavbar
                    course={course}
                    progressCount={progressCount}
                
                />
            </div>
			<main>{children}</main>
		</div>
	);
};

export default CourseLayout;
