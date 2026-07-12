require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");

const { Server } = require("socket.io");

const connectDB = require("./config/db");

const socketHandler = require("./socket/socket");

const messageRoutes = require("./routes/messageRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

app.set("io", io);

socketHandler(io);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});