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
app.use(cors());
var logga = ((text) => {
    fs.writeFile("./test", text, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});


app.get('/characterList/:user', (req, res, next) => {
    rp('https://pathofexile.com/character-window/get-characters?accountName=' + req.params.user).then(({
        body,
        statusCode
    }) => {
        var charList = JSON.parse(body);
        console.log("Type of:" + typeof charList);
        charList.forEach(Char => {
            console.log("Char 1 function - " + JSON.stringify(Char.name) + JSON.stringify(Char.league));;

        });
        // res.send(charList);
        res.json(charList);

    });
});
/*
rp('https://pathofexile.com/character-window/get-characters?accountName=Grublaf').then(({
    body,
    statusCode
}) => {
    var charList = JSON.parse(body);
    console.log("Type of:" + typeof charList);
    charList.forEach(Char => {
        console.log("Char 1 function - " + JSON.stringify(Char.name) + JSON.stringify(Char.league));

    });
    for (var char in charList) {
        console.log("Char second function - " + JSON.stringify(char));

        // if (char.name.contains('Wankman')) {
        //     // logga(JSON.stringify(char, null, 2));
        // }
        // res.write(char);
        // res.send(char);
    };
    // res.send(charList);
    // res.send(body);
}); */

app.get('/', (req, res) => {
    console.log("Meepworked on /");
    res.send("meep");
});

app.get('/public/:resource', (req, res) => {

});

app.listen(8080);