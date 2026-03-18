const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;

const server = http.createServer((req, res) => {
    console.log("Request URL:", req.url);

    let filePath;

    if (req.url === '/') {
        filePath = path.join(__dirname, 'ex1.html');
    } 
    else if (req.url === '/script.js') {
        filePath = path.join(__dirname, 'script.js');
    } 
    else if (req.url === '/favicon.ico') {
        res.writeHead(204);
        res.end();
        return;
    }
    else {
        res.writeHead(404);
        res.end("File not found");
        return;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            console.error(err);
            res.writeHead(500);
            res.end("Server Error");
        } else {
            let contentType = filePath.endsWith('.js')
                ? 'application/javascript'
                : 'text/html';

            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});