const fs = require("node:fs");

console.log("Start of Script");

const contents = fs.readFileSync("notes.txt", "utf-8");
console.log("Contents", contents);

fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("End of Script");
