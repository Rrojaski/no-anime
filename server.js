const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const server = express();

// Connect Database
connectDB();

// Init Middleware
server.use(express.json({ extended: false }));

// Define Routes
server.use("/api/users", require("./routes/api/users"));
server.use("/api/auth", require("./routes/api/auth"));
server.use("/api/profile", require("./routes/api/profile"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  server.use(express.static("client/build"));

  server.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
