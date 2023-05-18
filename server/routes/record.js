const express = require("express");
const { Double } = require("mongodb");
const recordRoutes = express.Router();

//connection to MongoDB Atlas
const dbo = require("../mongodb/conn");

const ObjectId = require("mongodb").ObjectId;


//getting all the records
recordRoutes.route("/data").get(function (req, res) {
  let db_connect = dbo.getDb("simple_data");
  db_connect
    .collection("sample_data")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log("results succelfully get");
    });
});

//getting one data using it id
recordRoutes.route("/data/:id").get(function (req, res) {
  let db_connect = dbo.getDb("simple_data");
  let myquery = { _id: Double(req.params.id) };
  db_connect
    .collection("sample_data")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(`succesfully get the data`);
    });
});


//adding new data on the database 
recordRoutes.route("/data/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  let query = {
    name: req.body.name,
  };
  db_connect.collection("sample_data").insertOne(data, function (err, result) {
    if (err) throw err;
    res.json(result);
    console.log("results succelfully add");
  });
});


//update one data from database
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  let query = { _id: Double(req.params.id) };
  let setvalue = {
    $set: {
      name: req.body.name
    },
  };
  db_connect
    .collection("sample_data")
    .updateOne(query, setvalue, function (err, result) {
      if (err) throw err;
      console.log("data updated");
      res.json(result);
    })
});


//delete one data from database
recordRoutes.route("/delete/:id").delete((req, res) => {
  let db_connect = dbo.getDb();
  let query = { _id: Double(req.params.id) };
  db_connect
    .collection("sample_data").deleteOne(query, function (err, result) {
      if (err) throw err;
      console.log("succesfully deleted")
      res.json(result);
    });
});
module.exports = recordRoutes;