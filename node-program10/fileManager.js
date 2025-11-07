const fs = require("fs");
const cmd = process.argv[2];
const file = process.argv[3];
const text = process.argv[4];

if (cmd === "create") fs.writeFileSync(file, text);
else if (cmd === "read") console.log(fs.readFileSync(file, "utf8"));
else if (cmd === "append") fs.appendFileSync(file, "\n" + text);
else if (cmd === "delete") fs.unlinkSync(file);
else console.log("use: create/read/append/delete");
