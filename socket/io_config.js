
const initIoConfig = (io)=>{
    io.on("connection",(socket)=>{
        socket.on("massage",(msg)=>{
            socket.broadcast.emit("massage",msg)
        })
       

        socket.on("typing",(data)=>{
            socket.broadcast.emit("typing",data)
        })




    })
}

module.exports = initIoConfig