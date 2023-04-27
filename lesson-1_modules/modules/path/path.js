const path = require("path");

//**The use of the path module(path.join()) */
//the filepath is jointing pathsname together e.g home/index.html

const filePath = path.join("./content", "subfolder", "test.txt");
// console.log(filePath);
//** Getting the base path*/
const basePath = path.basename(filePath);
// console.log(basePath);

//__dirname points to the root path
//path.resolve() accept absolute paths (__dirname or __filename) and resolves them into a single path
const absolutePath = path.resolve(
	__dirname,
	"content",
	"subfolder",
	"text.txt"
);
// console.log(absolutePath);
