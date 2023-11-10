import { auth } from "@clerk/nextjs";
import { Categories } from "./_components/categories";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { SearchInput } from "@/components/search-input";

interface SearchPageProps {
    searchParams: {
        title: string;
        categoryId: string;
    }
}


const SearchPage = async ({searchParams}:SearchPageProps) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/")
    }  
        const categories = await db.category.findMany({
            orderBy:{
                name: "asc",
            },
        })


    return (
        <>
            <div className="px-6 pt-6 md:hidden md:mb-0 block">
                <SearchInput/>
            </div>
				<div className="p-6 space-y-4">
					<Categories items={categories} />
				</div>
			</>
		);
}
 
export default SearchPage;