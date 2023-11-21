const { VideoService } = require("../../services/video-service/video-service");
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const stream = require('stream');

class VideoApi {
    constructor(){}


    static streamVideo(req, res) {
        console.log('here');
        const p = stream.PassThrough();
    // let counter=0;

    // command.
        // read.pipe(res);
    }

    static streamVideoById(req, res) {
        const id = req.params.id;
        return VideoService.streamVideoById(id);
    }

    static uploadVideo(req, res) {
        // const file = req;
        return VideoService.uploadVideo(file).then( (uploadedFile) => {
            if(uploadedFile.isUploaded){
                return res.status(201).send(uploadedFile);
            }
            else {
                return res.status(404).send(uploadedFile);
            }
        }).catch(err =>{});
    }

    static transcodeVideo(req, res) {
        const body ='';
        // console.log(body);
        const header = {
            'Content-Type': 'video/mp4'
        }
        res.writeHead(100, header);
        return VideoService.transcodeVideo(body, res).then(data => {
            // res.send(data);
            console.log(data);
            
            // data.run();
            // data.pipe(res);
        }).catch( err => {
            console.log(err);
            res.status(500).send(err);
        })
    }
}

module.exports.VideoApi = VideoApi;