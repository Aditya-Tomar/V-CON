const express = require("express");


class App {

    constructor(){}

    async initializeApp(){
        this.createExpressApp();

        this.startListening();
    }

    createExpressApp(){
        this.app = express();
    }

    connectToDB(){
        
    }

    createRoutes(){
        // const Routes = require("./config/routes/routes")
        // new Routes(this.app);
        // console.log("Routes Configured");
    }

    startListening(){
        this.app.listen(process.env.PORT, () => {
            console.log("Server started listening at port 3000");
        })
    }
}


module.exports = App;