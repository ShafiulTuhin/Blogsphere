import "dotenv/config";
import app from "./app";
import { prisma } from "./lib/prisma";
import config from "./config";

const PORT = config.port;
async function main() {
  try {
    await prisma.$connect();
    console.log("Database connected  successfully!");

    app.listen(PORT, () => {
      console.log(`listen from server by port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
