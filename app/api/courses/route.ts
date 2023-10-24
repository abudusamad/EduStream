<<<<<<< HEAD
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

=======
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

import { db } from "@/lib/db";


>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const { title } = await req.json();
<<<<<<< HEAD
		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });

		}
=======

		if (!userId) {
			return new NextResponse("Unauthorized", { status: 401 });
		}

>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
		const course = await db.course.create({
			data: {
				userId,
				title,
<<<<<<< HEAD
			}
		})
		return NextResponse.json(course)
		
=======
			},
		});

		return NextResponse.json(course);
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
	} catch (error) {
		console.log("[COURSES]", error);
		return new NextResponse("Internal Error", { status: 500 });
	}
<<<<<<< HEAD
}
=======
}
>>>>>>> 615bf4af3c9c9908287fdde42ccc75cacc4d50bb
