const njwt = require("njwt");
const bcrypt = require("bcrypt");

class UserAuthentication {

    constructor(){}
    
    static async verifyUserCredentials(params, credentials ){
        const password = params.password;
        bcrypt.hash(password, credentials.salt, (err, hashPassword ) => {
            if(err){
                console.error(err);
                return false;
            }
            return bcrypt.compare(hashPassword, credentials.password, (err, isValid) => {
                if(err){
                    console.log("Invalid Cred");
                    return false;
                }
                return isValid? true : false;
            });
        });
    }

    static async generateToken(userData){
        const payload = {
            username: userData.username,
            role: userData.role,
            nickname: userData.nickname,
            name: userData.name.fname,
        };

        const jwt = njwt.create(payload, "secret", 'HS512');
        return jwt.compact();
    }
}

module.exports.UserAuthentication = UserAuthentication;