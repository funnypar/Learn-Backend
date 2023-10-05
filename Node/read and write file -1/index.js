// module "File System"
const fs = require("fs");
// Now i want to read the
const file = fs.readFileSync("./file.txt", "UTF-8");
// Log it into consile
console.log(file);
