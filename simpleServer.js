/**
 * In the folder where you made server.js, run npm init -y to generate your package.json
 * Run npm install express
 * Change your server to look like this
 */

 //import the express library
const express = require("express");

//const app = express(); is how you create a new server.
const app = express();

/**
 * app.get(url, callback); is how you handle a new route. 
 * A route is how you handle the request when a user hits a particular URL. 
 * In this case we set up two, the default home page, /, and /complement. 
 */
app.get("/", function(req,res){
    res.end("Welcome to my site!");
});

app.get("/complement", function(req,res){
    res.end("you look beautiful today!");
});

app.listen(300);
console.log("listening on http://localhost:300");