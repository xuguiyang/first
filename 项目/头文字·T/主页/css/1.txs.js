/**
 * Created by admin on 2017/9/16.
 */

window.onload = function () {
        var Tbox = document.getElementById("Tbox");
        var Tdbox = document.getElementById("Tdbox");
        var Tanniu = document.getElementById("Tanniu");//��ť
        var Tanbox = Tdbox.children[1];//��ť�ĸ�����
        var Tleft = document.getElementById("Tleft");//��ť
        var Tright = document.getElementById("Tright");//�Ұ�ť
        var TimgWid = Tbox.offsetWidth;
        var Tul = Tbox.children[0];//�˶���ul
        var TlusUl = Tul.children;
        var Tol = Tbox.children[1];//����С�����λ��
        var TlisOl = Tol.children;
        var Ttimer = null;//��ʱ��
        //��¼�˶�������
        var Tcount = 0
        //��̬����
        var li;
        for (var i = 0; i < TlusUl.length; i++) {
            li = document.createElement("li");
            Tol.appendChild(li);
        }
        //��һ��ԲĬ�ϱ�ɫ
        TlisOl[0].className = "Tcurrent";
        //��Ч��
        for (i = 0; i < TlisOl.length; i++) {
            TlisOl[i].index = i;
            TlisOl[i].onclick = function () {
                //�����һ��Բʱ�������ǰ��ʾ��Ϊ�ٵĵ�һ�ţ�ֱ�ӻص�0
                if (Tcount == TlusUl.length - 1) {
                    Tul.style.left = 0 + "px";
                }
                //�����ť��ɫ
                for (var i = 0; i < TlisOl.length; i++) {
                    TlisOl[i].className = "";
                }
                this.className = "Tcurrent";
                //����СԲ����ֵ����ͼƬ�˶�
                animate(Tul, -this.index * TimgWid);

                //�ڵ��СԲʱͬ��Tcount��ֵ������ǰ��ť����ֵ��ͬ
                Tcount = this.index;
            }
        }

        //�����ٵĵ�һ��
        Tul.appendChild(TlusUl[0].cloneNode(true));

        //������������ʾ��ť
        Tdbox.onmouseover = function () {
            Tanbox.style.display = "block";
            clearInterval(Ttimer);
        };
        //����Ƴ�
        Tdbox.onmouseout = function () {
            Tanbox.style.display = "none";
            Ttimer = setInterval(function () {
                Tright.click();
            }, 2000);
        };
        //�����ť�л�ͼƬ
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
        //����Ұ�ť�л�ͼƬ
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

        //�Զ�����
        var Ttimer = null;
        Ttimer = setInterval(function () {
            Tright.click();
        }, 3000);


        function animate(element, target) {
            clearInterval(element.timer);//����ɵĶ�ʱ������֤�����˶�����ֹ����Ч��
            element.timer = setInterval(function () {
                //1 ��ȡԪ�ص�ǰλ�� ʹ��offsetLeft����
                var current = element.offsetLeft;
                //2 ���ò���
                var step = 30;
                //���ݵ�ǰλ�ú�Ŀ��λ�õĴ�С��ϵ�����ж�
                step = target > current ? step : -step;
                //5 �˶���������
                //��⵱ǰλ�ú�Ŀ��λ��֮��ľ��룬�������һ��step�ľ��룬�����˶�������ֱ���˶���Ŀ��λ�ã�����
                if (Math.abs(target - current) > Math.abs(step)) {
                    //3 �����˶���ʽ:Ԫ��λ��(��) = Ԫ��λ��(��) + ����;
                    current = current + step;
                    //4 ���ø�Ԫ�ص�leftֵ�˶�
                    element.style.left = current + "px";
                } else {
                    //6 ��elementֱ���˶���Ŀ��λ�ã��������ʱ��
                    element.style.left = target + "px";
                    clearInterval(element.timer);
                }
            }, 20);
        }
    }