const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
	try {
		await database.category.createMany({
			data: [
				{ name: "Computer Engineering" },
				{ name: "Electrical Engineering" },
				{ name: "Biomedical Engineering" },
				{ name: "TeleCommunication Engineering" },
				{ name: "Civil Engineering" },
				{ name: "Geological Engineering" },
				{ name: "Mechanical Engineering" },
				{ name: "Aerospace Engineering" },
				{ name: "Chemical Engineering" },
				{ name: "Agricultural Engineering" }
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
