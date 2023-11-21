const ffmpeg = require("fluent-ffmpeg");
const fs = require("fs");

class CustomTranscoder {

    constructor(){
        this.transcoder = new ffmpeg();
    }

    setInput(){
        this.transcoder.input();
    }

    setFormat(){
        this.transcoder.format();
    }
    setVideoBitrate(){
        this.transcoder.videoBitrate();
    }
    setFilter(){
        this.transcoder.videoFilters();
    }

    setSize() {
        this.transcoder.size('1280x?');
    }

    setAutoPad(){
        this.transcoder.autopad('black');
    }
}

// const read = fs.createWriteStream("frontend/video/viffdeo.webm");
// //     res.setHeader("Content-Type", "video/mp4");
// //     read.pipe(res);
// return new Promise( (resolve, reject ) => {
// const com = ffmpeg().input('frontend/video/flower.webm').format('webm')
// .videoBitrate('360k', true).inputFPS(10).videoFilters(
//     {
//       filter: 'fade',
//       options: ['in', 0, 30]
//     }, ).videoBitrate('1024k').size('1280x?').autopad('blue').on('end', resolve)
//     .on('error', reject).on('stdout',(d)=>console.log(d));
//     // com.run();
// const ste = com.pipe(res);
// // ste.on('data', (a,b) =>{console.log(b);}).on('codecData',(da)=>{console.log(da)})

// }).then().catch(er => {console.log(er)});
