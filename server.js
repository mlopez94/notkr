const fs = require("fs");
const path = require("path");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express(); // initiate server

// parse incoming string to array
app.use(express.urlencoded({ extended: true }));

// incoming JSON data
app.use(express.json());

app.use(express.static("public")); // heroku will display static pages from public folder




app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));// notes page
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html')); // index
});

app.get('/api/notes', (req, res) => {
    res.json(path.join(__dirname, '/public/index.html')); // index page
});





app.listen(3001, () => {
    console.log('API server now on port ${PORT}');
});

