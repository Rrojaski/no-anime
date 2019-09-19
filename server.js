const express = require("express");
const ConnectDB = require("./config/db");

const server = new express();

// COnnect Database
ConnectDB();

server.get("/", (req, res) => res.send("API Running"));

// Define Routes
server.use("/api/auth", require("./api/auth"));
server.use("/api/users", require("./api/users"));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
