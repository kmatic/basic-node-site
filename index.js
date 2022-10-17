const http = require('http');
const fs = require('fs');
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log(req.url);
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('index.html', (error, data) => {
            if (error) throw error;
            res.write(data);
            res.end();
        })
    } else if (req.url === '/about') {
        console.log(req.url);
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('about.html', (error, data) => {
            if (error) throw error;
            res.write(data);
            res.end();
        })
    } else if (req.url === '/contact') {
        console.log(req.url);
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('contact-me.html', (error, data) => {
            if (error) throw error;
            res.write(data);
            res.end();
        })
    } else {
        console.log(req.url);
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.readFile('404.html', (error, data) => {
            if (error) throw error;
            res.write(data);
            res.end();
        })
    }
});

server.listen(port, error => {
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
});
