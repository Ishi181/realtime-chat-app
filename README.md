# 💬 Real-Time Chat Application

A full-stack real-time chat application built using **React**, **Node.js**, **Express**, **Socket.io**, and **MongoDB Atlas**. The application allows multiple users to exchange messages instantly while persisting chat history in MongoDB.

---

# 🚀 Features

- ✅ Real-time messaging using Socket.io
- ✅ Persistent chat history using MongoDB Atlas
- ✅ REST APIs for sending and fetching messages
- ✅ Username-based login (dummy authentication)
- ✅ Online users counter
- ✅ Typing indicator
- ✅ Message timestamps
- ✅ Auto-scroll to latest message
- ✅ Responsive and clean chat interface
- ✅ Error handling for API requests

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Axios
- Socket.io Client
- CSS3

## Backend

- Node.js
- Express.js
- Socket.io
- MongoDB Atlas
- Mongoose

---

# 📂 Project Structure

```text
realtime-chat-app
│
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── messageController.js
│   ├── models
│   │   └── Message.js
│   ├── routes
│   │   └── messageRoutes.js
│   ├── socket
│   │   └── socket.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── socket.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation & Setup

## Clone the Repository

```bash
git clone <your-github-repository-url>
```

```bash
cd realtime-chat-app
```

---

# Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a **.env** file

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
```

Start backend

```bash
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---

# Frontend Setup

Open another terminal

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start frontend

```bash
npm start
```

Frontend runs on

```
http://localhost:3000
```

---

# 📡 REST APIs

## Get Chat History

**GET**

```
/api/messages
```

Returns all chat messages sorted by creation time.

---

## Send Message

**POST**

```
/api/messages
```

### Request Body

```json
{
  "username": "Ishi",
  "text": "Hello World"
}
```

---

# 🔄 Socket Events

## Client → Server

- typing
- stopTyping

## Server → Client

- receiveMessage
- onlineUsers
- typing
- stopTyping

---

# 🗄️ Database Schema

```javascript
Message
{
    username: String,
    text: String,
    status: String,
    createdAt: Date,
    updatedAt: Date
}
```

---

# 🧩 Design Decisions

- Used Socket.io to provide instant real-time communication.
- MongoDB Atlas stores all messages for persistence.
- REST APIs manage chat history and message creation.
- React Hooks manage component state.
- Express provides a lightweight backend API.

---

# 📌 Assumptions

- Users enter a username before joining the chat.
- Authentication is not implemented.
- All connected users belong to one common chat room.
- Internet connectivity is available.

---

# 📸 Screenshots

## Login Screen

> Insert Screenshot Here

<br><br><br>

---

## Chat Interface

> Insert Screenshot Here

<br><br><br>

---

## Two Users Chatting

> Insert Screenshot Here

<br><br><br>

---

## Typing Indicator

> Insert Screenshot Here

<br><br><br>

---

## Online Users

> Insert Screenshot Here

<br><br><br>

---

## MongoDB Collection

> Insert Screenshot Here

<br><br><br>

---

## Backend Running

> Insert Screenshot Here

<br><br><br>

---

## Frontend Running

> Insert Screenshot Here

<br><br><br>

---

# 🎥 Demo Video

Google Drive Link:

```
Paste Your Google Drive Link Here
```

---

# 🌐 GitHub Repository

```
Paste Your GitHub Repository Link Here
```

---

# 👩‍💻 Author

**Ishi Singla**

B.Tech Computer Science Engineering

---

# ⭐ Future Improvements

- Read receipts
- Delivered status
- User authentication (JWT)
- Private one-to-one chat
- Group chat
- File sharing
- Image sharing
- Emoji support
- Dark mode
- Message search
- Push notifications

---

# 📄 License

This project was developed as part of a technical assessment.
