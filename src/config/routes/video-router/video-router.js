const express = require("express");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix ='tmp';
    //   Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + '.mp4')
    }
  })
  
  const m = multer({ storage: storage });
// const m = multer({ dest: 'uploads/'});
const { VideoApi } = require("../../../apis/video-api/video-api");

class VideoRouter {

    constructor(){}

    initRoutes() {
        const router = express.Router();

        
        router.get("/", VideoApi.streamVideo );

        router.get("/:id", VideoApi.streamVideoById );

        router.post("/", [], VideoApi.uploadVideo );

        router.post("/transcode", m.single(),  VideoApi.transcodeVideo ); 

        return router;
    }
}

module.exports.VideoRouter = VideoRouter;