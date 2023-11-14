import { Category, Course } from "@prisma/client"

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progess: number | null;
}


interface CoursesListProps {

    items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({items}:CoursesListProps) => {
    return (
        <div>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
                {
                    items.map((item) => (
                        <CourseCard

                        
                        />
                    ))
                }

            </div>
        </div>
    )
}