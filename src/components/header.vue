<template>
    <div id='header-container'>
        <div class='headerTag'>
            <div class='container'>
                <ul>
                    <li>二 次 元 正 版 电 商，购 有 爱 !</li>
                    <li><img src="http://127.0.0.1:3000/img/head/header_arrow.png" alt=""></li>
                    <li>
                        <a href=""><img src="http://127.0.0.1:3000/img/head/small_credit.png" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="http://127.0.0.1:3000/img/head/small_return.png"></a>
                    </li>
                    <li>
                        <a href=""><img src="http://127.0.0.1:3000/img/head/small_mail.png"></a>
                    </li>
                    <li>
                        <div>
                            <a href="/cart.html"><img src="http://127.0.0.1:3000/img/head/cart_unfold.png" alt=""></a>
                            <div id='cartCount'>0</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class='top'>
            <div class='logo'>
                <a href=""><img src="http://127.0.0.1:3000/img/head/LOGO.png" alt=""></a>
            </div>
            <div class='right'>
                    <div class="search">
                            <input type="text" class='keyword' id="keywords" name="keywords" placeholder="请输入关键词">
                            <div class="mtbn"><a href=""><img src="http://127.0.0.1:3000/img/head/so.gif" alt=""></a></div>
                    </div>
                    <div class="searchtag">
                            <img src="http://127.0.0.1:3000/img/head/M1.png" alt="">
                            <img src="http://127.0.0.1:3000/img/head/M2.png" alt="">
                    </div>
                    <br>
                    <a href="">黏土</a>
                    <a href="">Saber</a>
                    <a href="">lovelive</a>
                    <a href="">海贼王</a>
                    <a href="">七龙珠</a>
                    <a href="">银魂</a>
                    <a href="">刀剑乱舞</a>
            </div>
            <div class='menu' id='unlog'>
            <a href="">使用QQ登录/</a>
            <a href="./login.html">登录/</a>
            <a href="./reg.html">注册</a>
            </div>
            <div id='loged'  style='display:none'>
                <span></span>
                <a href="/cart.html">购物车</a>
                |
                <a href="" id='logout'>退出登录</a>
            </div>
        </div>
        <div class='nav'>
            <div class='clearfix'>
                <div id='btnnav'>
                    <a href="">全部商品分类</a>
                    <em>▼</em>
                </div>
                <ul class='links'>
                    <li><a href="">首页</a></li>
                    <li><a href="">限时特价</a></li>
                    <li><a href="">新品预售</a></li>
                    <li><a href="">品牌街</a></li>
                    <li><a href="">漫社区</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){return{
        name:'lyy',
    }}
}
</script>
<style>
.headerTag{
	height:48px;border-bottom:1px solid #c2bfcd;background:#efefef;color:#333;box-shadow:1px 2px 3px #c2bfcd;text-align:center;font-size:14px;line-height:20px;
}
.clearfix:before{
	display: table;
    content: "";
    line-height: 0;
}
.clearfix:after{
	display: block;
    content: "";
    clear:both;
}
.container{
	width:1190px;margin:0 auto;
}
.container:before{
	content:'';
	display:table;line-height:0;
}
.container:after{
	content:'';
	display:block;
	clear:both;
	line-height:0;
}
body{
	font-family:arial,"Hiragino Sans GB","Microsoft Yahei",sans-serif;background:#f5f7fa;
}
ul{
	list-style:none;
}
.container>ul>li{
float:left;
}
.container>ul>li:first-child{
	line-height:38px;
}
.container>ul>li{
	margin-top:4px;margin-bottom:4px;
}
img{vertical-align:middle}
.container>ul>li:nth-child(2)>img{
	height:42px;border:0;margin-left:50px;
}
a{
	text-decoration:none;
}
.container>ul>li:nth-child(3){
	margin-left:200px;
}
.container>ul>li:nth-child(5){
	margin-left:40px;
}
.container>ul>li:nth-child(6){
	margin-left:40px;position:relative;float:right;
}
.container>ul>li:nth-child(6)>div>div{
	position:absolute;left:174px;top:28%
}
.container:after{
	content:'';
	display:block;
	clear:both;
}
.top{
	position:relative;height:110px;width:1190px;margin:0 auto;
}
.top .logo{
	position:absolute;top:20px;width:200px;height:95px;
}
.top .right{
width:403px;height:95px;position:absolute;left:280px;
top:20px;padding-top: 15px;
}
.top .right .search,.searchtag{display:inline-block}
.top .right .searchtag:hover img:last-child{
	display:block;
}
.top .right .searchtag img:first-child{
    margin-left: 12px;
}
.top .right .searchtag img:last-child{
	position:absolute;
	z-index: 10;
	top:1px;
	left:366px;
	display:none;
}
.top .right .keyword{    
	display: block;
    width: 364px;
    height: 32px;
    line-height: 32px;
    text-indent: 6px;
    border: 3px solid #ffad52;
    background: #fff;
	margin-bottom: 5px;
    color: #ccd1d9;
    border-radius: 6px;outline:none}
.top .right .mtbn{
	position: absolute;
    left: 346px;
    top: 24px;
    z-index: 2;
    display: block;
    width: 20px;
    height: 25px;
    cursor: pointer;
    border: 0;
    outline-width: 0px;
}
.top .right>a{
	padding-top: 4px;
	color:#aab2bd;
	font-size: 12px;
	margin-right: 4px;
}
.top .right>a:hover{
	color:#000;
	text-decoration:underline;
}
.top .menu{
position:absolute;right:15px;width:132px;height:13px;
top:20px;
}
.top>.menu>a{
	text-decoration:none;
	font-size:12px;
	text-align:center;
	color:#434a54;
	line-height:40px;
}
.top>.menu>a:hover{
	color:#FF8400
}
.top>#loged{
	position:absolute;
	right:15px;
	top:20px;
	width:273px;
	height:13px;
}
.top>#loged>a,.top>#loged>span{
	text-decoration:none;
	font-size:12px;
	text-align:center;
	color:#434a54;
	line-height:40px;
}
.top>#loged>a:hover{
	color:#FF8400
}
.nav{
	position: relative;
    height: 45px;
    line-height: 45px;
    color: #fff;
    font-size: 16px;
    background: #ffad52;
	border-radius: 4px 4px 4px 0;
	margin:0 auto;
	width:1190px;
}
#btnnav{
	width:229px;height:45px;line-height:45px;float:left;font-weight: bold;position:relative ;
}
#btnnav a{
    padding-left:20px;
    color: #fff;
    cursor: pointer;
    font-weight: 400;
    border-radius: 4px 0 0 4px;
	display:block;
}
#btnnav:hover{
	background: #ff6204;
}
#btnnav em{
	font-size:12px;
	position:absolute;
	right:10px;
	top:0px;
}
.clearfix>.links>li{
    width: 100px;
    margin: 0px auto;
    height: 45px;
    float: left;
}
.clearfix>.links>li:first-child{
	background: #ff6204;
}
.clearfix>.links>li:hover{
	background: #ff6204;
}
.clearfix>.links>li>a{
	display:inline-block;font-size: 18px;font-weight: 600;line-height: 45px;
    color: #fff;width:100%;text-align:center;
}
.bodytop{
	width:1190px;height:530px;
}
.bodytop>div{
	float:left;
}
.showlist{
	width: 230px;
	height: 530px;
	color: #333;
	background: #fffbea;
}
.showlist li{
	position:relative;
}
.showlist li a{
	display:block;
	width:100%;
	height:40px;
	text-indent:20px;
	line-height:40px;
	border-bottom: 1px solid #f4edd9;
	color:#974c19;
}
.showlist li a:hover{
	background: #FCF5DE;
}
.showlist li em{
	position:absolute;
	right:10px;
	top:10px;
	color:#974c19;
}
.showimg{
    height:100%;
    width:960px;
    position: relative;
}
.showimg>.showimgd1{
    margin-left: 10px;
    margin-top: 10px;
    width:950px;
    height: 410px;
    position: relative;
}
.showimg>.showimgd1>a>img{
    border-radius: 5px;
    position: absolute;
    top:0px;
    left:0px;
    opacity:0;
    transition: all 1s
}
.showimg>div>a>img.show{
    opacity:1;z-index:5;
}
#leftArrow{
    position: absolute;
    background-image:url('http://127.0.0.1:3000/img/commom/arrow-left.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height:80px;
    width:60px;
    top:187px;
    left:10px;
    z-index: 15;
    opacity: 0.5;
    border-radius: 5px;
    cursor: pointer;
}
#leftArrow:hover,#rightArrow:hover{
    opacity: 0.5;
    background-color: #656d78
}
#rightArrow{
    position: absolute;
    background-image:url('http://127.0.0.1:3000/img/commom/arrow-right.png');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    height:80px;
    width:60px;
    top:187px;
    right:0px;
    z-index: 15;
    opacity: 0.2;
    border-radius: 5px;
    cursor: pointer;
}
.showimg>ul{
    list-style: none;
    position: absolute;
    display: flex;
    bottom:128px;
    right:100px;
    z-index: 10;
}
.showimg>ul>li{
    margin-left: 10px;
}
.showimg>ul>li>div{
    width:25px;
    height: 25px;
    background: #FCB860;
    border:1px solid #666;
    opacity: 0.2;
    cursor: pointer;
}
.showimg>ul>li>div.actived{
    opacity: 0.5;
}
.showimgsmall{
    margin-top: 10px;
    padding-left:10px;
    display:flex;
    justify-content: space-between;
}
.showimgsmall a{
    margin-right:0px;
    display: inline-block;
    width: 230px;
    height: 100px;
    overflow: hidden;
}
.showimgsmall a:hover{
    border:2px solid #999999;
}
.showimgsmall a img{
    transition: all 0.2s linear
}
.showimgsmall a img:hover{
    
    transform: scale(1.1)
}
</style>
