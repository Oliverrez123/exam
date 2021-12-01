const express = require("express");
const router = express.Router();
const item_model = require("./../models/item")
const idb = require("./../helpers/idb")

router.post("/create", (req, res) => {
    const item = new item_model(req.body.kategori, req.body.pris);
    idb.saveItem(item);
    res.status(200).send(true)
    console.log(item)
});

router.get("/", (req,res) => {
    res.status(200).send(true);
}); 

router.delete("/delete", (req, res) => {
    const item = new item_model(req.body.kategori, req.body.pris);
    idb.deleteUser(user);
    res.status(200).send(true);
  });

module.exports = router;
