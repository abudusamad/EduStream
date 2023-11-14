import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseNavbar } from "./_components/course-navbar";
import { CourseSidebar } from "./_components/course-sidebar";

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
        <div className="h-full">
            <div className="h-[80px] md:pl-80 fixed inset-y-0 w-full z-50">
                <CourseNavbar
                    course={course}
                    progressCount={progressCount}
                
                />
            </div>
            <div>
                <CourseSidebar
                    course={course}
                    progressCount={progressCount}
                />
            </div>
			<main>{children}</main>
		</div>
	);
};

export default CourseLayout;
