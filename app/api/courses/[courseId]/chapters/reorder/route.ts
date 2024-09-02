import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PUT(
	req: Request,
	{ params }: { params: { courseId: string; chapterId: string } }
) {
	try {
		const { userId } = auth();
		const { list } = await req.json();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		const owncourse = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId: userId,
			},
		});
		if (!owncourse) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		for (let item of list) {
			await db.chapter.update({
				where: {
					id: item.id,
				},
				data: {
					position: item.position,
				},
			});
		}
		return new NextResponse("Success", { status: 200 });
	} catch (error) {
		console.log("[COURSE_CHAPTERS_REORDER_PUT_ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
