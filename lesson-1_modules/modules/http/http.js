const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") {
		res.end("Welcome to our homepage");
	}
	if (req.url === "/about") {
		res.end("Welcome to the about");
	}
	res.end(`<h1>oops! page not found</h1>`);
});

server.listen(5000);
