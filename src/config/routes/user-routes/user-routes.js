const express = require("express");
const { UsersApi } = require("../../../apis/users-api/users-api");


class UsersRoutes {

    constructor(){}

    initRoutes(){
        const router = express.Router();

        router.post("/authenticate", [], UsersApi.Authenticate );

        return router;
    }
}

module.exports.UsersRoutes = UsersRoutes;