const fs = require("fs");
const path = require("path");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express(); // initiate server


// parse incoming string to array
app.use(express.urlencoded({ extended: true }));

// incoming JSON data
app.use(express.json());

app.use(express.static("public")); // display static pages



// routes




app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html")); // notes page
});

app.get("/api/notes", (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"),(err,data)=>{
      res.json(data);
});

});






app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html")); // index
});

//

app.listen(3001, () => {
  console.log("API server now on port ${PORT}");
});
