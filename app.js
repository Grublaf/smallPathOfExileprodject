const express = require('express');
const request = require('request');
const https = require('https');
const path = require('path');
const cors = require('cors')
const fs = require('fs');




const {
    promisify
} = require('util');
const rp = promisify(request);

const app = express();
app.use(cors()); //Fixes some issues with CORS
var logga = ((text) => { //Writes to test file for easier testing.
    fs.writeFile("./test", text, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});

// Send request to URL/characterList/:user to get json response
app.get('/characterList/:user', (req, res, next) => {
    rp('https://pathofexile.com/character-window/get-characters?accountName=' + req.params.user).then(({
        body,
        statusCode
    }) => {
        var charList = JSON.parse(body); //Parse rp url with json(body)
        console.log("Type of:" + typeof charList);
        charList.forEach(Char => { //Should remove the foreach later
            console.log("Char 1 function - " + JSON.stringify(Char.name) + JSON.stringify(Char.league));;

        });
        // res.send(charList);
        res.json(charList);

    });
});

app.listen(8080);