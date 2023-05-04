const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
	console.log("hello");
});

customEmitter.emit("response");
