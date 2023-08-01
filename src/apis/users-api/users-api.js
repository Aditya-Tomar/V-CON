const { UsersService } = require("../../services/users-service/users-service");

class UsersApi {
    constructor(){}

    static GetUserByid(req, res) {
        const id = req.params.id;
        return UsersService.GetUserByid(id).then( (userData) => {
            return res.status(200).send(userData);
        });
    }

    static CreateUser(req, res){
        const requestParams = {
            name: {
                fname: "some",
                lname: "Tomar",
            },
            email: "aditom1243@gmail.com",
            password: "(iamAdi*1",
            profile_pic: null,
            nickname: "adi",
        }
        // { ...req.body };
        return UsersService.CreateUser(requestParams).then( (data) => {
            return res.status(201).send(data);
        }).catch(err => {
            
        });
    }
    
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

    static DeAuthenticate(req, res){
        const requestParams = req.body;
        return UsersService.DeAuthenticate(requestParams).then( () =>{
            return res.status(200).send(true);
        })
    }
}

module.exports.UsersApi = UsersApi;