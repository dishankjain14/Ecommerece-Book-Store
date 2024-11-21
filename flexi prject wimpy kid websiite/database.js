const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Connect to MongoDB using async/await
(async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/WimpyKid", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: " + error);
  }
})();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// Import necessary modules and models

const bodyParser = require("body-parser");
const User = require("./models/User"); // Import your User model


// Configure body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/WimpyKid", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a POST route for login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database
  User.findOne({ username, password }, (err, user) => {
    if (err || !user) {
      // Handle login failure
      return res.redirect("/login.html"); // Redirect back to login page or show an error message
    }

    // Handle successful login
    return res.redirect("/dashboard.html"); // Redirect to a dashboard or user profile page
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

