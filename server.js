
const express = require("express")
var expressLayouts = require('express-ejs-layouts');
const path = require("path")
const app = express()
const http = require("http").createServer(app)
const PORT = process.env.PORT || 3001
const io = require("socket.io")(http)


//Global Public File
app.use(express.static(__dirname + "/public"))
app.use(express.urlencoded({extended:false}));
app.use(express.json())

// Set View engine
app.set("view engine","ejs")
app.set("views",path.join(__dirname + "/resources/views"))
app.use(expressLayouts);


require("./routes/web")(app)

http.listen(PORT,()=>{
    console.log(`Server is raning on ${PORT}`);
})

require("./socket/io_config")(io)