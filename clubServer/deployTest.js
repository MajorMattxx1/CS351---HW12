// deployTest.js
const express = require('express');
const app = express();
const port = 333; 
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

let count = 0; // Visit count
let startDate = new Date().toLocaleString(); // Server start Date time
let yourName = "Matthew Stanford";
let netId = "gd9687";

app.use(express.static('public'))

app.get('/', function (req, res) {
    count++;
    res.render('hello.njk', { yourName,netId,count });
});

app.get('/uptime', function(req, res){
    let curDate = new Date().toLocaleString();
    res.render('uptime.njk', { curDate, startDate});
})

host = 'localhost';

app.listen(port, host, function () {
console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});

