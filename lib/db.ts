import { PrismaClient } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

const prisma = new PrismaClient();

(async () => {
	try {
		console.log(await prisma.widget.create({ data: {} }));
	} catch (err) {
		console.error("error executing query:", err);
	} finally {
		prisma.$disconnect();
	}
})();