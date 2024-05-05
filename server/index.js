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

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((m) => m.id === id);
  if (!movie) {
    return res.status(404).send("Movie not found");
  }

  return res.send(movie);
});

app.listen(8081, () => {
  console.log("Now listening on PORT 8081");
});
