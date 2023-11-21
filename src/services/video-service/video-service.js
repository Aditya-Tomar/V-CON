const { VideoRepository } = require('../../repository/video-repository/video-repository');

class VideoService {

    constructor(){}

    static async streamVideoById(id){ 
        return VideoRepository.streamVideoBuId(id);
    }

    static async uploadVideo(file){
        return VideoRepository.uploadVideoToDb(file);
    }
    
    static async transcodeVideo(body,res) {
        return VideoRepository.transcodeVideo(body,res);
    }
}

module.exports.VideoService = VideoService;