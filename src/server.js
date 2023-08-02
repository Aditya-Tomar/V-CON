const express = require("express");
const connect = require("../src/config/db-connection/db-connection");
const { MongooseWrapper } = require("./config/db-connection/mongoose-wrapper");
const cors = require("cors")
const bodyparser = require("body-parser");

class App {

    constructor(){}

    async initializeApp(){
        console.log("Initializing Application...");
        await this.connectToDB();
        this.createExpressApp();
        this.app.use(bodyparser.json());
        this.app.use(cors({
            origin: ['http://localhost:4200'] 
        }));
        this.createRoutes();
        this.startListening();
        this.errorHandler();
    }

    createExpressApp(){
        this.app = express();
    }

    async connectToDB(){

        MongooseWrapper.mongooseDb.connection.on('connecting', ()=> {
            console.log('Connecting with database.');
        });

        MongooseWrapper.mongooseDb.connection.on('error', (err)=> {
            console.log('Unable to connect with database : ', err);
        });

        MongooseWrapper.mongooseDb.connection.on('connected', () => {
            console.log("Application connected with database");
        });

        await connect();
    }

    createRoutes(){
        const Routes = require("./config/routes/routes")
        new Routes(this.app);
        console.log("Routes Configured");
    }

    startListening(){
        this.app.listen(process.env.PORT || 3000, () => {
            console.log("Server started listening at port ", 3000);
        })
    }

    errorHandler(){
        this.app.use((err, req, res, next) => {
            console.log("Error handler executed");
            next(err);
        });
    }
}


module.exports = App;