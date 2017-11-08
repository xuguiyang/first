/**
 * Created by admin on 2017/9/16.
 */

window.onload = function () {
        var Tbox = document.getElementById("Tbox");
        var Tdbox = document.getElementById("Tdbox");
        var Tanniu = document.getElementById("Tanniu");//按钮
        var Tanbox = Tdbox.children[1];//按钮的父盒子
        var Tleft = document.getElementById("Tleft");//左按钮
        var Tright = document.getElementById("Tright");//右按钮
        var TimgWid = Tbox.offsetWidth;
        var Tul = Tbox.children[0];//运动的ul
        var TlusUl = Tul.children;
        var Tol = Tbox.children[1];//放置小方块的位置
        var TlisOl = Tol.children;
        var Ttimer = null;//定时器
        //记录运动的张数
        var Tcount = 0
        //动态创建
        var li;
        for (var i = 0; i < TlusUl.length; i++) {
            li = document.createElement("li");
            Tol.appendChild(li);
        }
        //第一个圆默认变色
        TlisOl[0].className = "Tcurrent";
        //简单效果
        for (i = 0; i < TlisOl.length; i++) {
            TlisOl[i].index = i;
            TlisOl[i].onclick = function () {
                //点击第一个圆时，如果当前显示的为假的第一张，直接回到0
                if (Tcount == TlusUl.length - 1) {
                    Tul.style.left = 0 + "px";
                }
                //点击按钮变色
                for (var i = 0; i < TlisOl.length; i++) {
                    TlisOl[i].className = "";
                }
                this.className = "Tcurrent";
                //根据小圆索引值设置图片运动
                animate(Tul, -this.index * TimgWid);

                //在点击小圆时同步Tcount的值，跟当前按钮索引值相同
                Tcount = this.index;
            }
        }

        //创建假的第一张
        Tul.appendChild(TlusUl[0].cloneNode(true));

        //鼠标移入盒子显示按钮
        Tdbox.onmouseover = function () {
            Tanbox.style.display = "block";
            clearInterval(Ttimer);
        };
        //鼠标移除
        Tdbox.onmouseout = function () {
            Tanbox.style.display = "none";
            Ttimer = setInterval(function () {
                Tright.click();
            }, 2000);
        };
        //点击左按钮切换图片
        Tleft.onclick = function () {
            if (Tcount == 0) {
                Tul.style.left = -(TlusUl.length - 1) * TimgWid + "px";
                Tcount = TlusUl.length - 1;
                Tcount = TlisOl.length;
            }
            Tcount--;
            animate(Tul, -Tcount * TimgWid);
            for (var i = 0; i < TlisOl.length; i++) {
                TlisOl[i].className = "";
            }
            TlisOl[Tcount].className = "Tcurrent";
        }
        //点击右按钮切换图片
        Tright.onclick = function () {
            if (Tcount == TlusUl.length - 1) {
                Tul.style.left = 0 + "px";
                Tcount = 0;
            }
            Tcount++;
            animate(Tul, -Tcount * TimgWid);
            for (var i = 0; i < TlisOl.length; i++) {
                TlisOl[i].className = "";
            }
            if (Tcount == TlisOl.length) {
                TlisOl[0].className = "Tcurrent";
            } else {
                TlisOl[Tcount].className = "Tcurrent";
            }
        }

        //自动播放
        var Ttimer = null;
        Ttimer = setInterval(function () {
            Tright.click();
        }, 3000);


        function animate(element, target) {
            clearInterval(element.timer);//清除旧的定时器，保证匀速运动，防止加速效果
            element.timer = setInterval(function () {
                //1 获取元素当前位置 使用offsetLeft属性
                var current = element.offsetLeft;
                //2 设置步长
                var step = 30;
                //根据当前位置和目标位置的大小关系进行判断
                step = target > current ? step : -step;
                //5 运动条件设置
                //检测当前位置和目标位置之间的距离，如果满足一个step的距离，可以运动，否则直接运动到目标位置，结束
                if (Math.abs(target - current) > Math.abs(step)) {
                    //3 设置运动公式:元素位置(新) = 元素位置(旧) + 步长;
                    current = current + step;
                    //4 设置给元素的left值运动
                    element.style.left = current + "px";
                } else {
                    //6 让element直接运动到目标位置，再清除定时器
                    element.style.left = target + "px";
                    clearInterval(element.timer);
                }
            }, 20);
        }
    }