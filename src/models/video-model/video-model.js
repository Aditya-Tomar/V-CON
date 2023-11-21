const { MongooseWrapper } = require("../../config/db-connection/mongoose-wrapper");

const VideoSchema = new MongooseWrapper.mongooseDb.Schema({});


const VideoModel = MongooseWrapper.mongooseDb.model("video", VideoSchema);

module.exports.VideoModel = VideoModel;
