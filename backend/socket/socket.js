let onlineUsers = 0;

const socketHandler = (io) => {

    io.on("connection",(socket)=>{

        onlineUsers++;

        io.emit("onlineUsers",onlineUsers);

        console.log("User Connected");

        socket.on("typing",(username)=>{
            socket.broadcast.emit("typing",username);
        });

        socket.on("stopTyping",()=>{
            socket.broadcast.emit("stopTyping");
        });

        socket.on("disconnect",()=>{

            onlineUsers--;

            io.emit("onlineUsers",onlineUsers);

            console.log("User Disconnected");

        });

    });

}

module.exports = socketHandler;