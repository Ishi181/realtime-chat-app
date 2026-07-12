const Message = require("../models/Message");

// Get all messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: 1 });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Send message
const sendMessage = async (req, res) => {
  try {
    const { username, text } = req.body;

    if (!username || !text) {
      return res.status(400).json({
        message: "Username and message are required",
      });
    }

    const message = await Message.create({
      username,
      text,
    });

    const io = req.app.get("io");

    io.emit("receiveMessage", message);

    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getMessages,
  sendMessage,
};