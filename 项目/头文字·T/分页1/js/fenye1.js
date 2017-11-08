/**
 * Created by asus on 2017/9/20.
 */
$(function () {

    $("#qhr>.banxin>.bottom-right>ul>.jcyz").click(function () {
        $(this).children(".lis").slideToggle().css("opacity", "0.5")
    })
    $("#qhr>.banxin>.bottom-right>ul>li").mouseenter(function(){
        $(this).children(".xian").stop().slideDown(500)
    })
    $("#qhr>.banxin>.bottom-right>ul>li").mouseleave(function(){
        $(this).children(".xian").stop().slideUp(500)
    })

    $(".ztoper").mouseenter(function () {
        $(this).children(".xixi").stop().slideDown(1000);
    });
    $(".ztoper").mouseleave(function () {
        $(this).children(".xixi").stop().slideUp(1000);
    });
    $(".boxtop").mouseenter(function () {
        $(this).children(".xixi").stop().slideDown(1000);
    });
    $(".boxtop").mouseleave(function () {
        $(this).children(".xixi").stop().slideUp(1000);
    });
//            后添加部分
    $(window).scroll(function(){
        var A = $(window).scrollTop();
        if(A > 1900){
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
})