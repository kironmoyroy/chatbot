const indexController = require("../app/controllers/indexController")



const initRoute = (app)=>{
    app.get("/", indexController().index)
    


}




module.exports = initRoute