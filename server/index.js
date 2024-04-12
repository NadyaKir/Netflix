const express = require("express");
const cors = require("cors");
const movies = require("./movies.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  return res.send("HELLO");
});

app.get("/movies/list", (req, res) => {
  return res.send(movies);
});

app.listen(8081, () => {
  console.log("Now listening on PORT 8081");
});
