/**
 * Created by asus on 2017/9/20.
 */
    //        ��ں���
$(document).ready(function () {
    $("#qhr>.banxin>.bottom-right>ul>.jcyz").click(function () {
        $(this).children(".lis").slideToggle().css("opacity", "0.5")
    })


    $("#qhr>.banxin>.bottom-right>ul>li").mouseenter(function(){
        $(this).children(".xian").stop().slideDown(500)
    })
    $("#qhr>.banxin>.bottom-right>ul>li").mouseleave(function(){
        $(this).children(".xian").stop().slideUp(500)
    })


//            ���������li͸���ȸı�
    $("#xgy li").mouseenter(function () {
        $(this).css("opacity", 1).siblings().css("opacity", 0.3)
    });

    // ������������Ƴ�Ч��
    $(".xzxzt").mouseleave(function () {
        //�����ڲ�������li��͸����Ϊ1
        $(this).find("li").css("opacity", 1);
    });
    //            �������
    var lis=$(".ZconS li");
    for(var i = 0;i < lis.length;i++){
        lis.eq(i).mouseenter(function () {
            var imgs=$(this).children()
            imgs.children().stop().animate({
                width:"110%",
                height:"110%"
            },2000,"linear", function () {
            });
        });
    }
//            ��ͼЧ��
    $(".two").mouseleave(function () {
        for(var i = 0;i < lis.length;i++){
            var imgs =$(this).children();
            imgs.children().stop().animate({
                width:357,
                height:485,
                left:0,
                top:0
            },2000,"linear", function () {
            });
        }
    });
//            ��ͼ��Ч��
    $(".three").eq(1).mouseenter(function () {
        var imgs =$(this).children();
        imgs.children().stop().animate({
            width:"105%",
            height:"105%",
            left:0,
            top:0
        },2000,"linear", function () {
        });
    })
    $(".three").mouseleave(function () {
        var imgs =$(this).children();
        imgs.children().stop().animate({
            width:340,
            height:238,
            left:0,
            top:0
        },2000,"linear", function () {
        });
    });

//            ���沿��  ż������
    var lis=$(".ZconX li:even");
    lis.mouseenter(function () {
        var imgs=$(this).children()
        imgs.children().stop().animate({
            width:380,
            height:255
        },2000,"linear", function () {
        });
    });
    var lis=$(".ZconX li:even");
    lis.mouseleave(function () {
        var imgs=$(this).children()
        imgs.children().stop().animate({
            width:355,
            height:241
        },2000,"linear", function () {
        });
    });
//                ��������
    var lis=$(".ZconX li:odd");
    lis.mouseenter(function () {
        var imgs=$(this).children()
        imgs.children().stop().animate({
            width:375,
            height:255
        },2000,"linear", function () {
        });
    });
    var lis=$(".ZconX li:odd");
    lis.mouseleave(function () {
        var imgs=$(this).children()
        imgs.children().stop().animate({
            width:342,
            height:241
        },2000,"linear", function () {
        });
    });
})
