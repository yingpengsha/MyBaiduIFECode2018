**CSS3 2D 转换**
----------

> 资料： 
http://www.runoob.com/css3/css3-2dtransforms.html
> http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/



 **1. skew()**

>  包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。
> 
>  - skewX(<angle>);表示只在X轴(水平方向)倾斜。
>  - skewY(<angle>);表示只在Y轴(垂直方向)倾斜。

![此处输入图片的描述][1]

    .box1{
    	transform: skew(30deg);
    	-ms-transform: skew(30deg);	/* IE 9 */
    	-webkit-transform: skew(30deg);	/* Safari and Chrome */
    	-o-transform: skew(30deg);	/* Opera */
    	-moz-transform: skew(30deg);	/* Firefox */
    }

 **2. scale()**
 

>  scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：

![此处输入图片的描述][2]

    .box2{
    	transform:scale(0.5,1);
    	-ms-transform:scale(0.5,1); /* IE 9 */
    	-moz-transform:scale(0.5,1); /* Firefox */
    	-webkit-transform:scale(0.5,1); /* Safari and Chrome */
    	-o-transform:scale(0.5,1); /* Opera */
    }

 **3. rotate()**

>  scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数：

![此处输入图片的描述][3]

    .box3{
    	transform: rotate(50deg);
    	-ms-transform: rotate(50deg);		/* IE 9 */
    	-webkit-transform: rotate(50deg);	/* Safari and Chrome */
    	-o-transform: rotate(50deg);		/* Opera */
    	-moz-transform: rotate(50deg);		/* Firefox */
    }

 **4. translate()**

> translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

![此处输入图片的描述][4]

    .box4{
    	transform: translate(10px,20px);
    	-ms-transform: translate(10px,20px);		/* IE 9 */
    	-webkit-transform: translate(10px,20px);	/* Safari and Chrome */
    	-o-transform: translate(10px,20px);		/* Opera */
    	-moz-transform: translate(10px,20px);		/* Firefox */
    }

 **5. matrix()**

> matrix()方法和2D变换方法合并成一个。 matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能
PS:我试图用matrix()来解决box5，但是怎么也做不到与笨方法（上述几个加一起）一样，所以就放弃了，如果有大佬会的话，请多多指导，这个计算量看得我头大。

>>这个是matrix()资料： http://www.zhangxinxu.com/wordpress/2012/06/css3-transform-matrix-%E7%9F%A9%E9%98%B5/

![此处输入图片的描述][5]

    .div{
			transform: matrix(0.866,0.5,-0.5,0.866,0,0);
			-ms-transform: matrix(0.866,0.5,-0.5,0.866,0,0);	/* IE 9 */
			-webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0);	/* Safari and Chrome */
			-o-transform: matrix(0.866,0.5,-0.5,0.866,0,0);	/* Opera */
			-moz-transform: matrix(0.866,0.5,-0.5,0.866,0,0);	/* Firefox */
		}

  [1]: http://jadyoap.bj.bcebos.com/ife/%E4%BB%BB%E5%8A%A1%E4%BA%8C%E8%AE%BE%E8%AE%A1%E7%A8%BF.jpg
  [2]: http://jadyoap.bj.bcebos.com/ife/%E4%BB%BB%E5%8A%A1%E4%BA%8C%E8%AE%BE%E8%AE%A1%E7%A8%BF.jpg
  [3]: http://jadyoap.bj.bcebos.com/ife/%E4%BB%BB%E5%8A%A1%E4%BA%8C%E8%AE%BE%E8%AE%A1%E7%A8%BF.jpg
  [4]: http://jadyoap.bj.bcebos.com/ife/%E4%BB%BB%E5%8A%A1%E4%BA%8C%E8%AE%BE%E8%AE%A1%E7%A8%BF.jpg
  [5]: http://www.runoob.com/images/transform_rotate.gif
