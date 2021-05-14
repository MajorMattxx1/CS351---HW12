const express = require('express');
const app = express();
let count = 0;
const utcDate = new Date();

app.get('/', function (req, res) {
    count++;
    res.send(`<body><p>${utcDate.toUTCString()}</p><p>Name: MS, NetID: gd9687, visit number:${count} </p></body>`);
});

host = '127.69.69.95';
port = '9687';

app.listen(port, host, function () {
console.log(`comboServer.js app listening on IPv4: ${host}:${port}`);
});
