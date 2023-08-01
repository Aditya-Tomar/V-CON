const express = require("express");
const { UsersApi } = require("../../../apis/users-api/users-api");


class UsersRoutes {

    constructor(){}

    initRoutes(){
        const router = express.Router();

        router.get("/:id", [], UsersApi.GetUserByid );

        router.post("/create-users", [], UsersApi.CreateUser );

        router.post("/authenticate", [], UsersApi.Authenticate );

        router.post("/deauthenticate", [], UsersApi.DeAuthenticate );


        return router;
    }
}

module.exports.UsersRoutes = UsersRoutes;