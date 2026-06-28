import app from "./app";

const PORT = 5000;
async function main() {
  try {
    app.listen(PORT, () => {
      console.log(`listen from server by port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

main();
