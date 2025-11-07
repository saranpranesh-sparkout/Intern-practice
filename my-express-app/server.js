const express = require("express");
const path = require("path");
const config = require("./config");
const app = express();

const env = process.env.NODE_ENV || "development";
const currentConfig = config[env];

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.listen(currentConfig.port, () => {
  console.log(`Server running in ${currentConfig.mode} mode on port ${currentConfig.port}`);
});
