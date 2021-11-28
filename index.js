
// kører npm init -y for at starte et nyt node.js projekt, som vil åbne en package.json fil
//Derefter npm install express i terminalen  

// Definerer appen, altså express
const express = require('express');
const app = express();
const PORT = 8060;

const userController = require("./src/controllers/user-controller");

//opretter middleware, så alle requests kører igennem express.json
app.use(express.json());
app.use(express.static("./src/views"));

//ruter til http
app.use("/user", userController);


//bruger listen, starter server, og console.logger beskeden jeg har ønsket
app.listen(
    PORT,
() => console.log(`Live på http://localhost:${PORT}`)
    )

