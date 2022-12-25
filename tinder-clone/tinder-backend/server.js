const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const cardModel = require("./CardModel.js");

const app = express();
const connection_url = "mongodb://127.0.0.1:27017/tinderdb";

app.use(express.json());
app.use(Cors());

mongoose.connect(connection_url, { useNewUrlParser: true });

app.post("/cards", (req, res) => {
  const dbCards = req.body;

  cardModel.create(dbCards, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/cards", (req, res) => {
  cardModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get("/", (req, res) => {
  res.send("Clever Programmer");
});

app.listen(9000, () => {
  console.log("Server running at port: 9000");
});
