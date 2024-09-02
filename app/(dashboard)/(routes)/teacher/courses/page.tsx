import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const CoursePage = async () => {
	const { userId } = auth();
	if (!userId) {
		return redirect("/");
	}

	const courses = await db.course.findMany({
		where: {
			userId,
		},
		orderBy: {
			createdAt: "desc",
		},
	});
	return (
		<div className="p-6">
			<div className="containermx-auto py-10">
				<DataTable columns={columns} data={courses} />
			</div>
		</div>
	);
};

export default CoursePage;
