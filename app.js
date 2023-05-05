const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "./EXPRESS/index.html"));
});

app.get("/about", (req, res) => {
	res.status(200).send("This is the about page");
});

app.get("*", (req, res) => {
	res.status(404).send("The resource was not found");
});

app.listen(5000, () => {
	console.log("running on port 5000");
});

// const server = app.createServer((req,res)=> {

// })

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen
