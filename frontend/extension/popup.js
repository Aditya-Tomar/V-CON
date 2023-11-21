let className="wiyse";

$(function(){
    var highlight=false;
    $(window).keydown(function(event){
        console.log(event.shiftKey);
        if((event.shiftKey && event.key == 'A')){
            $('a').on("click", function(e) {
                if($(`.${className}`).length != 0){
                    e.preventDefault();
                }
            });
          $( "[data-wy]" ).each(function( i ) {
            var e = $(`<div id="wy-'${i}'" class=${className} style="float:left;border: 2px solid #27ff00;border-radius: 5px;position: absolute;left: 0;right: 0;top: 0;bottom: 0;width: 100%;height: 100%;padding: 5px;"></div>`);
            $(this).append(e);
          })   
        }
        else {
            $(`.${className}`).remove();  
        }
    });

document.addEventListener("click", function(e){
    console.log(e.target.className);
    if(e.target.className == "wiyse"){
            // alert(e.target.id)
            swal(e.target.id + "Here's a title", "we can add dynamic text here", "success", {
            button: "button",
           });
       };
    }); 
});
