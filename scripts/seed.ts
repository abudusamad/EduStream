const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
	try {
		await database.category.createMany({
			data: [
				{ name: "Software Engineering" },
				{ name: "Embedded System" },
				{ name: "Object Oriented Programming" },
				{ name: "Computer Architecture" },
				{ name: "Robotics and Computer Vision" },
				{ name: "Data Structure and Algorithm" },
				{ name: "Microprocessor" },
			],
		});

		console.log("Success");
	} catch (error) {
		console.log("Error seeding the database categories", error);
	} finally {
		await database.$disconnect();
	}
}

main();
