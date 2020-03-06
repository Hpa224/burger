let express = require("express");
let router = express.Router()
let burger = require('../models/burger.js')

router.get("/", function(req, res) {
    burger.select(function(data) {
        let obj = {burgers:data}
	    console.log(obj);
	    res.render("index",obj);
        })
    });

router.post("/api/burgers", function(req, res) {
  console.log(req.body)
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
        });
    });

router.get("/api", function(req, res) {
  burger.select(function(data) {

    console.log(data);
    res.json(data);
      })
  });

router.put("/api/burgers/:id", function(req, res) {
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