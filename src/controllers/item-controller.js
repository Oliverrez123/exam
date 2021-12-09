//importerer og 'requirer' express og laver nyt router objekt
const express = require("express");
const router = express.Router();

//lokaliserer mapper
const item_model = require("./../models/item")
const idb = require("./../helpers/idb")


//endpointet bliver defineret, stedet hvor nye items skal kunne sættes til salg.
router.post("/create", (req, res) => {
    const item = new item_model(req.body.kategori, req.body.pris);
    idb.saveItem(item);
    res.status(200).send(true)
    console.log(item)});
//bruger get metoden for index
router.get("/", (req,res) => {
    res.status(200).send(true);
}); 

  //for at hentes i de andre filer, eksporterer jeg routeren
module.exports = router;
