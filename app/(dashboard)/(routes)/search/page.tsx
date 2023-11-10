import { auth } from "@clerk/nextjs";
import { Categories } from "./_components/categories";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { CoursesList } from "@/components/courses-list";



const SearchPage = async () => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }  
        const categories = await db.category.findMany({
            orderBy:{
                name: "asc",
            },
        })
    
    const courses = await getCourses({
        userId,

    })

    return (
			<div className="p-6 space-y-4">
            <Categories items={categories} />
            <CoursesList items={courses}/>
			</div>
		);
}
 
export default SearchPage;