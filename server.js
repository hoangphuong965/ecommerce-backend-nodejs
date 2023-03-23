const app = require("./src/app");

const PORT = 8000;

const server = app.listen(PORT, () => {
    console.log(`eCommerce start with ${PORT}`);
});

process.on("SIGINT", () => {
    server.close(() => console.log("Exit Server Express"));
});