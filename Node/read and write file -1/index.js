// --------------------module "File System"
// const fs = require("fs");
// Now i want to read the
// --------------------const file = fs.readFileSync("./file.txt", "UTF-8");
// Log it into consile
// -------------------console.log(file);

// ------------------------------------ Wrtie in file ------------------------------------
// module "File System"
const fs = require("fs");
// what i want to add
const myTxt = "Here we goooooo 🥊.\n I will see you again in the next step 😉";
// write it in file
fs.writeFileSync("./output.txt", myTxt);
// show that was success
console.log("Done!");
