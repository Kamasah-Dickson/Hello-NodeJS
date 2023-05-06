const express = require("express");
const app = express();
const { people } = require("./EXPRESS/data");

app.get("/", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.listen(5000, () => {
	console.log("server is listening on port 5000...");
});
