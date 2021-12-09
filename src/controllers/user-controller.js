//importerer og 'requirer' express og laver nyt router objekt
const express = require("express");
const router = express.Router();

//finder og lokaliserer modulesne user.js og db.js under deres respektive mapper
const userModel = require("./../models/user");
const db = require("./../helpers/db");

//laver nyt endpoint for at lave ny bruger
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);});

//Lavet et endpoint hvor users skal deletes

router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  //sender til db at brugeren skal slettes
  db.deleteUser(user);
  res.status(200).send(true);});

//opretter update endpoint, hvor bruger-opdatering skal foregå
router.put("/update", (req, res) => {
  const user = {email: req.body.email, password: req.body.password, brugtEmail: req.body.brugtEmail};
  db.updateUser(user);
  res.status(200).send(true);})
  
//post metoden til login
router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);}} else {
    res.status(404).send(false);
  }
});

//for at hentes i de andre filer, eksporterer jeg routeren
module.exports = router;
