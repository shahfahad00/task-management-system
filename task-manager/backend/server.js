const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/taskmanager", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Default route for testing
app.get("/", (req, res) => {
  res.send("Welcome to the Task Manager API!");
});

// Use Task Routes
app.use("/api/tasks", taskRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));