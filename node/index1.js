// const fs = require("fs")
// fs.readFile("read.txt", "utf-8", (data, err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })
// fs.writeFile("w.txt", "write a fike in the given file", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("SuccessFully written in the a file");
// })
import http from "http";

const server = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader('utf-8', 'text/plain');


  res.end("Hello World in world");
});

server.listen(3005, () => {
  console.log("Server works successfully on port 3000");
});