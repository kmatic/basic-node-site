const fs = require('fs');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '404.html'));
});

app.listen(port, () => {
    console.log('Server is listening on port '+ port);
});
