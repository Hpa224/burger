let express = require("express");
let burger = require('../models/burger.js')
let router = express.Router()

router.get("/", function(req, res) {
    burger.select(function(data) {
        let obj = {burgers:data}
	    console.log(obj);
	    res.render("index",obj);
        })
    });

router.post("/api/burgers", function(req, res) {
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
        });
    });

router.put("/api/cats/:id", function(req, res) {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update(
        {devoured: req.body.devoured},
      condition,
      function(result) {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });


module.exports=router;