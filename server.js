const express = require("express");
const path = require("path"); //path is a libray for getting correct file locations

const complements = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

/**
 * get a random complement
 */
function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * complements.length);
  return complements[randomIndex];
}

/**
 * create a new server
 */
const app = express();

/**
 * whenever someone asks for "/", send the the index.html
 * __dirname is a special Node variable that's the folder of where the server.js file is. 
 * We know that index.html is in the same folder, 
 * so we're saying serve the index.html file found in the same directory as server.js.
 */
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * return a complement as a json object
 */
app.get("/complement", function(req, res) {
  res
    .json({
      complement: getRandomComplement()
    })
    .end();
});

/**
 * serves everything in the public directory publicly. 
 * We'll put stuff in here like images, client JS files, 
 * CSS files, and anything else we need users to be able to download from our server. 
 */
app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");