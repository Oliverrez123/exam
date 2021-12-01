
// kører npm init -y for at starte et nyt node.js projekt, som vil åbne en package.json fil
//Derefter npm install express i terminalen  

// Definerer appen, altså express
const express = require('express');
const app = express();


//controllers
const userController = require("./src/controllers/user-controller");
const itemController = require("./src/controllers/item-controller");

const PORT = process.env.PORT || 6969;
//opretter middleware, så alle requests kører igennem express.json

app.use(express.static("./src/views"));
app.use(express.json());


//ruter til http
app.use("/users", userController);
app.use("/items", itemController);


//bruger listen, starter server, og console.logger beskeden jeg har ønsket
app.listen(PORT, console.log("Server er flyvende"));

