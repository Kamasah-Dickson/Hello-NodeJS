// const fs = require("fs"); //returns an object containing the file-system properties
// const { readFileSync, writeFileSync, readFile, writeFile } = require("fs"); => //**destructuring the data from th 'fs' object */
// console.log(fs);

// **NOTE**
//**There are two ways of using the file-system */
//**1.The synchronous way  */
//**2.The Asynchronous way  */

// Synchronous Way e.g

// readFileSync reads a file in a file-system in a an asynchronous way
//writeFileSync writes to a file and if the file doesn't exist, it creates the file

//**readFileSync */
// readFileSync("../../../content/subfolder/test.txt", "utf-8", (error, data) => {
// 	if (error) throw error;
// 	console.log(data);
// });

//returns the content of the text file inside the test.txt inside the console in a synchronous way
// console.log(readAFile);

//**writeFileSync */
// writeFileSync(
// 	"../../../content/subfolder/writeThisFile.txt",
// 	"Here is the results "
// );

//**The Asynchronous way */
//readFile and writeFile is asynchronous because it takes some time to read from  and write to based on how fast a users operating system is

// **NOTE**
//treat it like how you add an event listener to somthing like a button
//It is similar to readFileSync but readFile is in an asynchronous way

//**readFile */
// readFile("../../../content/subfolder/readFile.txt", "utf-8", (error, data) => {
// 	if (error) console.log(error);
// 	console.log(data);
// });

//**writeFile */
// writeFile(
// 	"../../../content/subfolder/writeThisFile.txt",
// 	"Hey i am working",
// 	(error) => {
// 		if (error) console.log(error);
// 	}
// );

//**because readFile and writeFile are promises we can create a new promise to handle errors and data */
// const { readFile } = require("fs");
// function getText(path) {
// 	return new Promise((resolve, reject) => {
// 		readFile(path, "utf8", (error, data) => {
// 			if (error) {
// 				reject(error);
// 			} else {
// 				resolve(data);
// 			}
// 		});
// 	});
// }

// getText("./content/subfolder/readFile.txt")
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

//**OR we could use the .promises on the fs module */
// const { readFile, writeFile } = require("fs").promises;
// const start = async () => {
// 	try {
// 		const first = await readFile("./content/subfolder/readFile.txt", "utf-8");
// 		await writeFile(
// 			"./content/subfolder/newReadFile.txt",
// 			"I wrote in this file"
// 		);
// 		console.log(first);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();

//**Or we could use the util module to create a promise */
// const { readFile } = require("fs");
// const util = require("util");
// const promisify = util.promisify(readFile);

// const start = async () => {
// 	try {
// 		const first = await promisify("./content/subfolder/readFile.txt", "utf-8");
// 		console.log(first);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// start();
