import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import Mux from "@mux/mux-node";
import { NextResponse } from "next/server";

const { Video } = new Mux(
	process.env.MUX_TOKEN_ID!,
	process.env.MUX_TOKEN_SECRET!
);

export async function DELETE(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		const course = await db.course.findUnique({
			where: {
				id: params.courseId,
				userId: userId,
			},
			include: {
				chapters: {
					include: {
						muxData: true,
					},
				},
			},
		});
		if (!course) {
			return new NextResponse("Not Found", { status: 404 });
		}
		for (const chapter of course.chapters) {
			if (chapter.muxData?.assetId) {
				await Video.Assets.del(chapter.muxData.assetId);
			}
		}
		const deleteCourse = await db.course.delete({
			where: {
				id: params.courseId,
			},
		});
		return NextResponse.json(deleteCourse);
	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}

export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();
		const values = await req.json();
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}
		const course = await db.course.update({
			where: {
				id: params.courseId,
				userId,
			},
			data: {
				...values,
			},
		});
		return NextResponse.json(course);
	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Server Error", { status: 500 });
	}
}
