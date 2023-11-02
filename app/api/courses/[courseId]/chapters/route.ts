import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{
		params,
	}: {
		params: { courseId: string; chapterId: string };
	}
) {
	try {
		const { userId } = auth();
		const { title } = await req.json();
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

		const lastChapter = await db.chapter.findFirst({
			where: {
				courseId: params.courseId,
			},
			orderBy: {
				position: "desc",
			},
		});

		const newPosition = lastChapter ? lastChapter.position + 1 : 1;

		const chapter = await db.chapter.create({
			data: {
				title,
				courseId: params.courseId,
				position: newPosition,
			},
        });
        
        return NextResponse.json(chapter);
	} catch (error) {
		console.log("[COURSE_CHAPTERS_POST_ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
