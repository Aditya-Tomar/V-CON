const { UsersService } = require("../../services/users-service/users-service");

class UsersApi {
    constructor(){}

    static Authenticate(req, res){
        const params = { ...req.params };
        return UsersService.Authenticate(params).then( (response) => {
            if(response.isValid){
                return res.status(201).send(response);
            } else {
                return res.status(401).send(response);
            }
        }).catch(err => {});
    }
}

module.exports.UsersApi = UsersApi;