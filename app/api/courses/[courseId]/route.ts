<<<<<<< HEAD
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

=======
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";



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
			return new NextResponse("Not found", { status: 404 });
		}

		

		const deletedCourse = await db.course.delete({
			where: {
				id: params.courseId,
			},
		});

		return NextResponse.json(deletedCourse);
	} catch (error) {
		console.log("[COURSE_ID_DELETE]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
export async function PATCH(
	req: Request,
	{ params }: { params: { courseId: string } }
) {
	try {
		const { userId } = auth();
<<<<<<< HEAD
=======
		const { courseId } = params;
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
		const values = await req.json();

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

		const course = await db.course.update({
			where: {
<<<<<<< HEAD
				id: params.courseId,
=======
				id: courseId,
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
				userId,
			},
			data: {
				...values,
			},
		});

		return NextResponse.json(course);
	} catch (error) {
		console.log("[COURSE_ID]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
}
