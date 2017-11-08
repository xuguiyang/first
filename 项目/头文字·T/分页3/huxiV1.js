// 第一个参数表示的是呼吸的时间
// 第二个参数表示的是自动轮播的间隔时间
function huxiV1(huxishijian,jiangeshijian){
	var nowimg = 0;		//信号量

	// *****定时器的业务*****
	var timer = setInterval(rightButFunc,jiangeshijian);

	//鼠标进入的时候，停止定时器
	$(".huxi").mouseenter(
		function(){
			clearInterval(timer);
		}
	);

	//鼠标离开的时候，继续定时器
	$(".huxi").mouseleave(
		function(){
			clearInterval(timer);  //设表先关
			timer = setInterval(rightButFunc,jiangeshijian);
		}
	);
	// *****定时器的业务*****

	//右按钮
	$(".huxi .buttons .rightBut").click(rightButFunc);
	//右按钮的业务
	function rightButFunc(){
		if(!$(".huxi .imagelist li").is(":animated")){
			if(nowimg < $(".huxi .imagelist li").length - 1){
				nowimg ++;
			}else{
				nowimg = 0;
			}
			changePicFunc();  //调用函数
		}
	}

	//左按钮
	$(".huxi .buttons .leftBut").click(
		function(){
			if(!$(".huxi .imagelist li").is(":animated")){
				if(nowimg > 0){
					nowimg --;
				}else{
					nowimg = $(".huxi .imagelist li").length - 1;
				}
				changePicFunc();//调用函数
			}
		}
	);

	//小圆点
	$(".huxi .imgnav li").click(
		function(){
			if(!$(".huxi .imagelist li").is(":animated")){
				nowimg = $(this).index();		//让信号量变为自己的序号
				changePicFunc();		//调用函数
			}
		}
	);

	//最最关键的换图函数：
	function changePicFunc(){
		//让信号量那个图fadeIn，其余的图图都fadeOut:
		$(".huxi .imagelist li").eq(nowimg).fadeIn(huxishijian).siblings().fadeOut(huxishijian);
		//让信号量那个小圆点，有cur； 其余的点点，去掉cur：
		$(".huxi .imgnav li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	}
}