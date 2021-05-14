const express = require('express');
const app = express();
let count = 0;

app.get('/', function (req, res) {
    count++;
    res.send(`<body><p>Name: MS, NetID: gd9687, visit number:${count} </p></body>`);
});

host = '127.6.9.5';
port = '9687';

app.listen(port, host, function () {
console.log(`HelloCount.js app listening on IPv4: ${host}:${port}`);
});
