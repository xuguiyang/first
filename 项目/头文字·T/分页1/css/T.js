/**
 * Created by admin on 2017/9/17.
 */
window.onload = function(){
    var nowimg = 0;

    $(".baozha").prepend("<div class='maoni'></div>");

    for(var i = 0 ; i <= 99; i++){
        $(".maoni").append("<p></p>");
        $(".maoni p").eq(i).css("top",parseInt(i / 10) * 58);
        $(".maoni p").eq(i).css("left",i % 10 * 138);
        $(".maoni p").eq(i).css("background-position", (i % 10 * -138) + "px " + parseInt(i / 10) * -58 +  "px");

    }

    $(".baozha").click(
        function(){

            if(nowimg >= 6){
                nowimg = 0;
            }else{
                nowimg++;
            }
            $(".zhentu").attr("src","images/" + nowimg + ".jpg");

            $(".maoni p").css("transition","all 1s ease 0s");
            $(".baozha").addClass("fei");

            //添加飞的方向：
            $(".maoni p").each(
                function(){
                    $(this).css("-webkit-transform","rotateX(" + -parseInt(Math.random() * 90)+ "deg) rotateY(" + parseInt(Math.random() *  100) + "deg) translateZ(500px)")
                }
            );


            setTimeout(function(){
                $(".baozha").removeClass("fei");
                $(".maoni p").css("transition","none");
                $(".maoni p").css("-webkit-transform","none");

                $(".maoni p").css("background-image","url("+ "images/"+ nowimg + ".jpg)");
            },1000);
        }
    );

        $(document).ready(
            function(){
                $(window).scroll(
                    function(){
                        var A = $(window).scrollTop();
                        if(A > 400){
                            $(".Tchangjing").addClass("cur");
                        }else{
                            $(".Tchangjing").removeClass("cur");
                        }
                    }
                );
            }
        );
}
