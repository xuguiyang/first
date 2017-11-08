/**
 * Created by admin on 2017/9/18.
 */
$(document).ready(function(){
        $(window).scroll(function(){
                var A = $(window).scrollTop();
                if(A > 10){
                    $(".changjing").addClass("cur");
                }else{
                    $(".changjing").removeClass("cur");
                }

            });
    $(".changjing a").mouseenter(function () {
        $(this).css("opacity",0.6)
    })
    $(".changjing a").mouseleave(function () {
        $(this).css("opacity",1)
    })
    });