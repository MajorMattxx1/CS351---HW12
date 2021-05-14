const express = require('express');
var app = express();
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
let host = '127.0.3.6'; // Choose a different loopback address
let port = '9687'; // Last digits of your NetID
let myName = 'MS';

let info = {host: host, port: port, name: myName}

const utcDate = new Date();

app.get('/', function (req, res) {
    res.render(res.send(`<body><p>${utcDate.toUTCString()}</p></body>`));
});

app.listen(port, host, function () {
    console.log("Example app listening on IPv4: " + host +
    ":" + port);
});