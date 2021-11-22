
// kører npm init -y for at starte et nyt node.js projekt, som vil åbne en package.json fil
//Derefter npm install express i terminalen  

// Definerer appen, altså express
   const app = require('express')();
const PORT = 8060;
//bruger listen, og console.logger beskeden jeg har ønsket
app.listen(
    PORT,
    () => console.log(`Live på http://localhost:${PORT}`)
    )
