const multer = require("multer");
const GridStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const { MongooseWrapper } = require("../../config/db-connection/mongoose-wrapper");
const storage = GridStorage({ db: MongooseWrapper.mongooseDb });
const gridfsStream = Grid(MongooseWrapper.db, MongooseWrapper.mongooseDb);

// gridfsStream.createWriteStream({
//     _id: '50e03d29edfdc00d34000001', // a MongoDb ObjectId
//     filename: 'my_file.txt', // a filename
//     mode: 'w', // default value: w

//     //any other options from the GridStore may be passed too, e.g.:

//     // chunkSize: 1024,
//     content_type: 'multipart/form-data', // For content_type to work properly, set "mode"-option to "w" too!
//     // root: 'my_collection',
// });

module.exports.gfs = gridfsStream;