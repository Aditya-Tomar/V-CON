const { VideoRouter } = require("./video-router/video-router");
const { UsersRoutes } = require("./user-routes/user-routes");

class Routes {

    constructor(app){
        this.app=app;
        this.init();
    }

    init(){
        this.app.use("/api/users", new UsersRoutes().initRoutes() );
        this.app.use("/api/video", new VideoRouter().initRoutes() );
        
    }

}

module.exports = Routes;