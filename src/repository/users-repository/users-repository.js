// THIS FILE IS ONLY TO PERFORM OPERATION RELATED TO DATABASE ( or DATABASE INTERACTION ).
const { UsersModel } = require("../../models/models");


class UsersRepository {

    static #model = UsersModel;

    constructor(){}

    static async GetUserById(id) {
        try{
            // const projection = "_id:1, name:1, videoCount:1,";
            const user = await this.#model.findById({_id: id});
            return user;
        } catch (err){
            // console.error(err);
            throw err;
        }
    }

    static async CreateUserProfile(requestParams) {
        try {
            return await this.#model.create(requestParams);
        } catch(err){
            console.log(err);
            throw new Error(err);
        }
    }

    static async AuthenticateUser(requestParams) {
        try{
            return this.#model.find(requestParams);
        } catch(err) {
            console.error(err);
            throw new Error(err);
        }
    }
}

module.exports.UsersRepository = UsersRepository;