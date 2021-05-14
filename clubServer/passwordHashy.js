const express = require('express');
const app = express();
app.use(express.static('./public'));

//PASSWORD HASHING FUNCTION
const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 14;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

let salty = bcrypt.genSaltSync(nRounds);

users.forEach(info => {
    let tempUser = { "firstName": info.firstName,
                    "lastName": info.lastName,
                    "email": info.email,
                    "password": bcrypt.hashSync(info.password, salty),
                    "role": info.role};
hashedUsers.push(tempUser);
});

 
                 
let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));