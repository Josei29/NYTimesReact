const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;
const app = express();
const routes = require("./routes/api.js")(app);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytimes");

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});