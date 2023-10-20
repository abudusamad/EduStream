import { error } from "console";


const { PrismaClient } = require("@prisma/client")

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
					data: [
						{ name: "Comptuer Science" },
						{ name: "Engineering" },
						{ name: "Music" },
						{ name: "Fitness" },
						{ name: "Photography" },
						{ name: "Accounting" },
						{ name: "Filling" },
						{ name: "Videography" },
					],
        });
        
        console.log("Success")
        
    } catch {
        console.log("Error seeding the database categories ", error)
    }
    finally {
        await database.$disconnect();
    }
        
}
main();