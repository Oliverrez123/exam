const express = require("express");
const app = express();

//Jeg henter mine definerede controllers til brugere og varer
const userController = require("./src/controllers/user-controller");
const itemController = require("./src/controllers/item-controller");

//Jeg definerer hvilken port jeg ønsker min hjemmeside skal køre på
const PORT = process.env.PORT || 6969;

//Jeg definerer hvor mit middleware hentes
app.use(express.static("./src/views"));
//Jeg definerer at jeg ønsker JSON filer
app.use(express.json());

//Jeg laver nu to forskellige ruter til hhv. bruger og varer for at holde dem afskilt 
app.use("/users", userController);
app.use("/items", itemController);

//Jeg starter serveren og logger dette i konsollen for udviklerens skydl
app.listen(PORT, console.log("Server is up and running my friend"));

