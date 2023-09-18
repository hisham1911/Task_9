const products = [
  {
    id: 1,
    name: "Red",
    color: "Red",
    price: 10,
  },
  {
    id: 2,
    name: "Blue",
    color: "Blue",
    price: 15,
  },
  {
    id: 3,
    name: "Green",
    color: "Green",
    price: 12,
  },
  {
    id: 4,
    name: "Yellow",
    color: "Yellow",
    price: 8,
  },
  {
    id: 5,
    name: "Purple",
    color: "Purple",
    price: 20,
  },
];

let Color = require("./models/color")
var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://meanStack:hesham2001@cluster0.y8fpmfz.mongodb.net/product"
  )
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log("error connection to database");
  });

const express = require("express");
// import express from "express";

const server = express();
server.get("/colors", function (req, res) {
  Color.find()
    .then((productsData) => {
      res.send(productsData);
    })
    .catch((err) => {
      res.send({
        error: "Error getting product",
      });
    });
});
server.get("/color/:id", function (req, res) {
  let colorId = +req.params.id;
  Color.findOne({ id: colorId },{_id:0})
    .then((singleProduct) => {
      res.send(singleProduct);
    })
    .catch((err) => {
      console.log(err);
    });
});

server.get("/home", function (req, res) {
  res.send("<b>Welcome to our APIs</b>")
});


server.get("/", function (req, res) {
  res.redirect("/home");
});


server.get("*", function (req, res) {
  res.status(404).send("404 Not Found");
});



server.listen(4000, function () {
  console.log("server connected");
});
