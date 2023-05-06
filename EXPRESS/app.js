const express = require("express");
const app = express();
const { people } = require("./EXPRESS/data");

app.get("/", (req, res) => {
	res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

//**Route params */
// app.get("/api/products/:productID", (req, res) => {
// 	const singleProduct = people.find(
// 		(product) => product.id === Number(req.params.productID)
// 	);
// 	if (!singleProduct) {
// 		res.status(404).send("sorry request not found");
// 	} else {
// 		res.json(singleProduct);
// 	}
// });

//**Query strings */
// ** e.g localhost:5000/api/v1/products?query=hello&id=543&age=20
//console logging will return an object {query:'hello,id:543,class:'jhs}

app.get("/api/v1/products", (req, res) => {
	console.log(req.query);
});

app.listen(5000, () => {
	console.log("server is listening on port 5000...");
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
