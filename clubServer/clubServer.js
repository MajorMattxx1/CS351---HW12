// deployTest.js
const express = require('express');
const app = express();
const port = 3031; 
const nunjucks = require('nunjucks');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

let yourName = "Matthew Stanford";
let netId = "gd9687";

app.use(express.static('./public'));

app.get('/', function (req, res) {
    res.render('index.njk', { userRole: 'admin'});
});

const session = require('express-session');
// change cookie name from default
const cookieName = "clubsid"; // Session ID cookie name, use this to delete cookies too.

// Create the session middleware and put it into general use
app.use(session({
  secret: 'webdev CSUEB',
  resave: false,
  saveUninitialized: false,
  name: cookieName // Sets the name of the cookie used by the session middleware
}));

// This initializes session state
const setUpSessionMiddleware = function (req, res, next) {
  // We can attach any state/info we like to the session JS object
  // Below we add a user property.
  if (!req.session.user) { // Check for state or initialize it
    req.session.user = {loggedin: false};
  }
  next();
};

app.use(setUpSessionMiddleware); // Put it to use!

// Use this middleware to restrict paths to only logged in users
const checkLoggedInMiddleware = function (req, res, next) {
  if (!req.session.user.loggedin) {
    res.render("forbidden.njk");
  } else {
    next();
  }
};

app.get('/login', function(req, res){
    res.render('login.njk', { userRole: 'admin'});
});


app.get('/membership', function(req, res){
    res.render('membership.njk', { userRole: 'admin'});
});

const activities = require('./public/eventData.json');
app.get('/activities', function(req, res){
    res.render('activities.njk', { activities:activities, userRole: 'admin' });
});

const members = require('./public/clubUsersHash.json');
app.get('/members', function(req, res){
    res.render('members.njk', { members:members, userRole: 'admin' });
});

app.get('/membershipSignup', function(req, res){
    res.render('membershipSignup.njk', { userRole: 'admin'});
});

host = 'localhost';

app.listen(port, host, function () {
console.log(`clubServer.js app listening on IPv4: ${host}:${port}`);
});

let memberApplications = [];

//following code based on examples from here: https://flaviocopes.com/express-forms/

app.use(express.urlencoded({
  extended: true
}))


//following is replaced by a later function
/*
app.post('/membershipSignup', function (req, res) {
    name = req.body.name
    email = req.body.email
    cheese = req.body.toughestCheese
    
    temp = [name, email, cheese]
    
    memberApplications.push(temp);
    
    console.log(memberApplications);
    res.render('thanks.njk', { temp});
});
*/

const fs = require('fs');
const bcrypt = require('bcryptjs');
let nRounds = 10;
let hashedUsers = [];
let salty = bcrypt.genSaltSync(nRounds);
app.post('/membershipSignup', function (req, res) {
    name = req.body.name;
    email = req.body.email;
    password = bcrypt.hashSync(req.body.password, salty);
    cheese = req.body.toughestCheese;
    
    let tempUser = { "name": name,
                    "email": email,
                    "password": password,
                    "cheese": cheese};
    memberApplications.push(tempUser);
    hashedUsers.push(tempUser);
    console.log("New User Info: ")    
    console.log(memberApplications);
    res.render('thanks.njk', { tempUser, userRole: 'admin'});
    
    fs.writeFileSync("./public/clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));
});

const userData = require('./public/clubUsersHash.json');
app.post('/loginConfirm', function (req, res) {
    name = req.body.username;
    password = req.body.password;
    nameCheck = false;
    let tempUser = {};
    
    let page = res;
    
    for (var i = 0; i < userData.length; i++)
    {
        tempName = userData[i].name;
        tempPassword = userData[i].password;
        if (tempName == name)
        { 
            nameCheck = true;
            let tempUser = { "name": userData[i].name,
                    "email": userData[i].email,
                    "cheese": userData[i].cheese}; 
            bcrypt.compare(password, tempPassword, function(err, res)
            {
                if(err)
                {
                    console.log("error");
                }
                if (res)
                {
                    let oldInfo = req.session.user;
                    req.session.regenerate(function (err) {
                        if (err) {
                            console.log(err);
                        }
                    req.session.user = Object.assign(oldInfo, userData[i], {
                        loggedin: true
                    });
                    page.render('loginWelcome.njk', { userRole: 'admin', tempUser});
                });
                } else {
                    page.render('loginProblem.njk', { userRole: 'admin'});
                }
            });
        break;
        }; 
    };
});
    
app.get('/addActivity', function(req, res){
    res.render('addActivity.njk', { userRole: 'admin'});
   
});

app.get('/addActivitySubmit', function (req, res) {
    
    name = req.query['name'];
    dates = req.query['dates'];
    
    if (activities.length > 100) { // only keep the last 100 activities added
        activities.shift(); // removes the first item
    }
    
    temp = { name, dates };
    activities.push(temp);
    console.log(temp);
    res.render('activities.njk', { userRole: 'admin', activities:activities });
});

app.get('/serverId', function(req, res){
    info =
    {
        "studentName": "Matthew Stanford",
        "netId": "gd9687",
        "message": "message"
    }
    res.send(info)
});

app.get('/logout', function(req, res){
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        res.clearCookie(cookieName, options); // the cookie name and options
        res.render('logout.njk', { userRole: 'admin'});
    })
});

