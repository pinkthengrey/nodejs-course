const fs = require("node:fs");

const content = fs.readFileSync("notes.txt", "utf-8");
console.log(content);

fs.writeFileSync("copy.txt", "I want to write this", "utf-8");

fs.appendFileSync("copy.txt", "\n\nhey", "utf-8");

// fs.mkdirSync("games");
fs.mkdirSync("games/xyz/a", { recursive: true });

fs.rmdirSync("games/xyz/a", {});

fs.unlinkSync("copy.txt");
