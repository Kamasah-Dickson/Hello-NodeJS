const { createReadStream } = require("fs");
//properties

//default 54kb
//last buffer -remainder
//highwaterMark - control size

const stream = createReadStream("./readFile.txt", {
	encoding: "utf-8",
	highWaterMark: 200,
});

// stream.on("data", (results) => {
// 	console.log(results);
// });

// stream.on("error", (error) => console.log(error));

//**Pipe()
//** */ what the pipe does is that it is pushing data from the readStream to the write Stream
