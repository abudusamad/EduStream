import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
	req: Request,
	{
		params,
	}: {
		params: { courseId: string };
	}
) {
	try {
		const { userId } = auth();
		const { url } = await req.json();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const ownCourse = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId,
			},
		});
		if (!ownCourse) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const attachments = await db.attachment.create({
			data: {
				url,
				name: url.split("/").pop(),
				courseId: params.courseId,
			},
		});

		return NextResponse.json(attachments);
	} catch (error) {
		console.log("[COURSE_ID] [ATTACHMENTS] [POST] [ERROR]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
