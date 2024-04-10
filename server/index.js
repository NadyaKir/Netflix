const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("HELLO");
});

app.listen(8081, () => {
  console.log("Now listening on PORT 8081");
});
