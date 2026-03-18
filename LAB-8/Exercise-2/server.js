const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 3000;
const server = http.createServer((req, res) => {
    let filePath;
    if (req.url === '/') {
        filePath = path.join(__dirname, 'ex2.html');
    } else if (req.url === '/script.js') {
        filePath = path.join(__dirname, 'script.js');
    } else {
        res.writeHead(404);
        res.end("File not found");
        return;
    }
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end("Server Error");
        } else {
            let contentType = 'text/html';
            if (filePath.endsWith('.js')) {
                contentType = 'application/javascript';
            }
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});