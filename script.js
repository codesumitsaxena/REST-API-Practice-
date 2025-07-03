// const fs = require('fs')
// fs.writeFileSync('Sumit.html', "how are you")
// const data = fs.readFileSync('Sumit.html','utf-8')
// console.log(data);

// const dltFile = fs.unlinkSync('text.txt')
// console.log(dltFile)



const os = require('os')
console.log(os.platform())
console.log(os.uptime())
console.log(os.tmpdir())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.hostname())


// Paath


const path = require('path')
console.log(path.basename(__filename))
console.log(path.dirname(__dirname))
console.log(path.extname(__filename))
console.log(path.resolve(__filename))



// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.end('Home Page');
//   } else if (req.url === '/about') {
//     res.end('About Page');
//   } else {
//     res.writeHead(404);
//     res.end('Page not found');
//   }
// });

// server.listen(3000, () => {
//   console.log('Server running at http://localhost:3000');
// });



