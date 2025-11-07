const EventEmitter = require("events");
const ev = new EventEmitter();

ev.on("greet", () => console.log("Hello Saran!"));
ev.emit("greet");
