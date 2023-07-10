const mongoose = require("mongoose");


class MongooseWrapper {
    constructor(){}

    static mongooseDb = mongoose;
}

module.exports.MongooseWrapper =  MongooseWrapper;