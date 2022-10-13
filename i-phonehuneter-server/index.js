const express = require("express");
const app = express();
const port = 7000;
const phones = require("./phones.json");
const core = require("cors");
app.use(core());

app.get("/", (req, res) => {
  res.send("Hey wellcome to iPhone Server");
});

app.get("/phones", (req, res) => {
  res.send(phones);
});

app.get("/phones/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((ph) => ph.id === id) || {};
  res.send(phone);
});

app.listen(port, () => {
  console.log(`iPhone Server Is connected ! "${port}`);
});
