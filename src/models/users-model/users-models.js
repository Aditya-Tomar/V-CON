const { MongooseWrapper } = require('../../config/db-connection/mongoose-wrapper');
const bcrypt = require("bcrypt");


const UsersSchema = new MongooseWrapper.mongooseDb.Schema({
    name: {
        fname: { type:String, required: true },
        lname: { type: String, required: true},
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
    },
    password: { type: String, required: true },
    salt: String ,
    created_Date: { type: Date, default: Date.now() },
    userType: { type: String, default: "normal" },
    Role: { type: String, default: "user" },
    profile_pic: String,
    nickname: String,
    videoCounts: { type: Number, default: 0 },
    uploadedIds: [MongooseWrapper.mongooseDb.ObjectId]
});


// UsersSchema.virtual('fullName').
//     get(function() {
//         console.log("updating name")
//         return this.name.first + ' ' + this.name.last;
//     }).
//     set(function(v) {
//         this.name.first = v.substr(0, v.indexOf(' '));
//         this.name.last = v.substr(v.indexOf(' ') + 1);
//     });

function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


UsersSchema.pre("save", function (next) {
    try{
        const { hash, salt } = hashPassword(this.password );
        this.password = hash;
        this.salt = salt;
        next();
    } catch ( err ) {
        console.log(err);
        next(err);
    }
});

function hashPassword(password){
    const saltCount = 8;
    const salt = bcrypt.genSaltSync(saltCount);

    const hash = bcrypt.hashSync(password, salt);
    return { hash, salt};
}

const Model = MongooseWrapper.mongooseDb.model("users", UsersSchema);
module.exports.UsersModel =  Model;
