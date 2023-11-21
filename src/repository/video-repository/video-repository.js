// THIS FILE IS ONLY TO PERFORM OPERATION RELATED TO DATABASE ( or DATABASE INTERACTION ).
const { VideoModel } = require("../../models/video-model/video-model");
const ffmpeg= require("fluent-ffmpeg");
const fs=require('fs');

class VideoRepository {

    #model = VideoModel;
    constructor(){}

    static async streamVideoBuId(id){
        return true;
        //  this.#model.find({_id: id});
    }

    static async uploadVideoToDb(file){
        return { isUploaded: true, _id: "", thumbnail: "" };
        //  this.#model.create({_id: id});
    }

    static async transcodeVideo(body, res) {
        console.log(body);
        // const read = fs.createReadStream("./uploads/video-tmp");
        // res.setHeader("Content-Type", "video/mp4");
        // //     read.pipe(res);
        // read.on('data', (d) => {
        //     console.log(d);
        // })
        console.log('startttt'); 
        return new Promise( (resolve, reject ) => {
            console.log('inn')
            ffmpeg().input(fs.createReadStream('./uploads/video-tmp.mp4'))
        // .inputFPS(10).videoFilters(
        //     {
        //     filter: 'fade',
        //     options: ['in', 0, 30]
        //     }, )
        .videoBitrate('140k')
        // .size('1280x?').autopad('blue')
        .format('webm')
            .on('start', (s)=> {console.log('started',s)})
            .on('progress', (s) => {console.log('progress')}).on('end', () => {
                resolve();
            })
            .on('error', reject).on('stdout',(d)=>console.log(d)).pipe(res);
            // com.run();
        // const ste = com.pipe(res);
        // ste.on('data', (a,b) =>{console.log(b);}).on('codecData',(da)=>{console.log(da)})

        }).then().catch(er => {console.log(er)});
    }
}

module.exports.VideoRepository = VideoRepository;