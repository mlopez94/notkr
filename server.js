const fs = require("fs");
const path = require("path");
const uniqid = require("uniqid"); // npm package to create id

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express(); // initiate server
const { notes } = require("./db/db.json");


app.use(express.static("public"));

// parse incoming string to array
app.use(express.urlencoded({ extended: true }));

// incoming JSON data
app.use(express.json());


// function for note creation used from zookpr and updated
function createNote(body, newnoteArray) {
  const note = body;
  newnoteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, "./db/db.json"),
    JSON.stringify({ notes: newnoteArray }, null, 2)
  );

  return note;
};



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
  res.sendFile(path.join(__dirname, "/public/index.html")); // index page
});

// POST route 
app.post("/api/notes", (req, res) => {
  req.body.id = uniqid(); // call id package for creation
  const note = createNote(req.body, notes);
  res.json(note);
});



app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
