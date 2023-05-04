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
