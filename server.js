const fs = require("fs");
const path = require("path");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express(); // initiate server

// parse incoming string to array
app.use(express.urlencoded({ extended: true}));

// incoming JSON data
app.use(express.json());

app.use(express.static("public")); // heroku will display static pages





app.listen(3001, () => {
    console.log('API server now on port ${PORT}');
});

