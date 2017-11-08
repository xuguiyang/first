/**
 * Created by asus on 2017/9/20.
 */
window.onload = function(){
    // 第一个参数表示的是呼吸的时间
    // 第二个参数表示的是自动轮播的间隔时间
    huxiV1(800,2000);
};
$(document).ready(
    function(){
        $(window).scroll(
            function(){
                var A = $(window).scrollTop();
                if(A >2000){
                    $(".changjing").addClass("cur");
                }else{
                    $(".changjing").removeClass("cur");
                }
            }
        );
        $(".tp").mouseenter(function () {
            $(this).children(".logo").css({
                display:"block",
                opacity:0.8
            })
        })
        $(".tp").mouseleave(function () {
            $(this).children(".logo").css("display","none")
        })

    }
);