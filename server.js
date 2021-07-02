const fs = require("fs");
const path = require("path");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express(); // initiate server
const { notes } = require("./db/db.json");

app.use(express.static("public"));

// parse incoming string to array
app.use(express.urlencoded({ extended: true }));

// incoming JSON data
app.use(express.json());



// routes

app.get("/api/notes", (req, res) => {
  let results = notes;
  console.log(req.query);
  res.json(results);

});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html")); // notes page
});



app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html")); // index
});

//

app.listen(3001, () => {
  console.log("API server now on port ${PORT}");
});
