//--------------第四部分     start----------------
//var lpy=document.getElementById("lpy");
//var ols=lpy.children[1].children[1]
//var ylis=ols.children;
//
//for (var i = 0; i < ylis.length; i++) {
//    ylis[i].index=i;
//    ylis[i].onmousemove=function() {
//        for (var i = 0; i < ylis.length; i++) {
//            ylis[i].style.
//                backgroundColor="";
//        };
//        this.style.backgroundColor="rgba(0,0,0,0.5)"
//        this.style.cursor="pointer"
//        var ps=this.children;
//        for (var i = 0; i < ps.length; i++) {
//            ps[i].style.fontSize="25px"
//
//        }
//
//
//
//
//    };
//    ylis[i].onmouseout=function() {
//        for (var i = 0; i < ylis.length; i++) {
//            ylis[i].style.backgroundColor="";
//        };
//        var ps=this.children;
//        for (var i = 0; i < ps.length; i++) {
//            ps[i].style.fontSize="19px"
//
//        }
//
//
//
//
//    }
//
//
//}
$(function() {
    var lis=$("#ols li");
    for (var i = 0; i < lis.length; i++) {
        //鼠标移入
        lis.eq(i).mouseenter(function() {
            //li  背景加透明
            $(this).css({
                backgroundColor:"rgba(0,0,0,0.7)",
                paddingTop:280,
                paddingBottom:40,
                borderBottom:"14px solid #feb34b"
            });
            var index=$(this).index();
            var uls=$(".lunbo>ul");


            uls.stop().animate({
                left:-index*1566,
            },1000);
            var ps=$(this).children();
            for (var i = 0; i < ps.length; i++) {
                ps.eq(i).css({
                    fontSize:24
                });

            }

        })
        //鼠标移出
        lis.eq(i).mouseleave(function() {
            //li  背景加透明
            $(this).css({
                backgroundColor:"",
                paddingTop:346,
                paddingBottom:0,
                borderBottom:"8px solid #87d4ef"
            });
            var index=$(this).index();
            var uls=$(".lunbo>ul");
            uls.stop().animate({
                left:0,
            },1000);
            var ps=$(this).children();
            for (var i = 0; i < ps.length; i++) {
                ps.eq(i).css({
                    fontSize:16
                });

            }



        })


    }






})



















//--------------第四部分     end------------------