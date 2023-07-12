const { UsersRepository } = require("../../repository/users-repository/users-repository");
const { UserAuthentication } = require("../user-authentication-service");


class UsersService {

    constructor(){ }

    static async Authenticate(requestParams){
        return UsersRepository.AuthenticateUser(requestParams).then( userData => {
            UserAuthentication.verifyUserCredentials(requestParams, userData ).then( (isValid) => {
                if(isValid){
                    UserAuthentication.generateToken(userData).then( (token) => {
                        Object.assign(this.token, {[`${userData.name}-${userData.role}`]: token});
                        response.accessToken = token;
                        response.isValid = true;
                        return response;
                    });
                } else {
                    return {
                        message: "Invalid Credentials",
                        isValid: false,
                    };
                }
            });
        }).catch(err => {});
    }
    
}

module.exports.UsersService = UsersService;