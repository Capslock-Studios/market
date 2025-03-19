const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import User model
const User = require("./models/User");

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect("mongodb+srv://bamngmzi:968UfUwr4PGxVpP5@cluster0.yjgei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("Connection error:", err));

// Add data to database
app.post("/add", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = new User({ name, email, phone });
    await newUser.save();
    res.json({ message: "User added successfully", data: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get data from database
app.get("/data", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Start server
app.listen(5000, () => console.log("Server running on port 5000"));
