require("dotenv").config();

const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const socketHandler = require("./socket/socket");
const messageRoutes = require("./routes/messageRoutes");
console.log("Message Routes Loaded:", typeof messageRoutes);

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
}));

app.use(express.json());

// Create HTTP Server
const server = http.createServer(app);

// Socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Make io available in controllers
app.set("io", io);

// Socket Handler
socketHandler(io);

// -------------------- ROUTES --------------------

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Test Route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "API is working successfully!",
  });
});

// Debug Route
app.get("/debug", (req, res) => {
  res.json({
    success: true,
    message: "Debug route working!",
    routes: [
      "/",
      "/api",
      "/api/messages",
    ],
  });
});
console.log("Registering /api/messages route");
// Message Routes
app.use("/api/messages", messageRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server Running on Port ${PORT}`);
});