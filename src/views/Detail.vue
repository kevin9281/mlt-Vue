<template>
  <div class="prodetail" >
    <van-nav-bar class='vantHeader' fixed>
            <van-icon name="arrow-left" slot="left" color='#fff' size='20px' @click='back'/>
            <span to="" slot="title" id='vantTitle'>{{this.data.title}}</span>
            <van-icon name="share" slot="right" color='#fff' size='20px' @click='share'/>
    </van-nav-bar>
    <van-nav-bar class='vantHeader' style="visibility:hidden"/>
    <van-actionsheet v-model="show" title="分享至" @cancel="onCancel" close-on-click-overlay>
        <p>朋友圈</p>
        <p>微博</p>
        <p>QQ</p>
    </van-actionsheet>
    <van-swipe :autoplay="2000" indicator-color='#ff8600'>
        <van-swipe-item v-for="(e, i) in goodpic" :key="i">
            <img style="width:100%" :src='e'/>
        </van-swipe-item>
    </van-swipe>
    <van-panel>
      <div slot="header" style="text-align:center;fongt-size:16px;font-weight:bold;padding:0 20px">{{data.title}}</div>
      <div class='good-content'>
          <van-row type="flex" justify="space-around">
            <van-col span="12" ><span class='good-content-title' style="text-align:left">本店售价：</span><span class='good-newprice'>￥{{data.price}}.00元</span></van-col>
            <van-col span="12"><span class='good-content-title'>商品品牌：</span><a class='good-brand'>{{data.brand}}</a></van-col>
          </van-row>
          <van-row type="flex" justify="space-around">
            <van-col span="12"><span class='good-content-title'>市场价格：</span><del class='good-oldprice'>￥{{data.oldprice}}.00元</del></van-col>
            <van-col span="12"><span class='good-content-title'>商品库存：</span><span class='good-stock'>仅剩{{data.stock}}件</span></van-col>
          </van-row>
          <van-row type="flex" >
            <van-col span="12"><span class='good-content-title'>款式：</span><a class='good-type'>{{data.type}}</a></van-col>
          </van-row>       
      </div>
      <div slot="footer">
        <img  alt="" v-for="(e,i) of detailpic" :key='i' :src="e" style="width:100%" />
      </div>
    </van-panel>
    <van-actionsheet v-model="showcart" title="加入购物车">
      <div style="width:100%">
        <div style="width:100%;display:flex">
          <div style="width:50%">
            <img :src="goodpic[0]" alt="" style='width:100%'>
          </div>
          <div style="width:50%;height:100%">
            <p>请选择商品数量</p>
            <van-row>
              <van-col span="8"><button style='width:80%;' @click='lesscart'>-</button></van-col>
              <van-col span="8"><input type="text" readonly v-model="count" style="display:inline-block;height:33px"></van-col>
              <van-col span="8"><button style='width:80%;' @click="pluscart">+</button></van-col>
            </van-row>
          </div>
        </div>
        <van-goods-action-big-btn text="加入购物车" @click="addcart"/>
      </div>
    </van-actionsheet>
    
    <van-popup v-model="showbuy">内容</van-popup>
    <van-goods-action style="z-index:2">
      <van-goods-action-mini-btn
        icon="chat-o"
        text="客服"
        
      />
      <van-goods-action-mini-btn
        icon="cart-o"
        text="购物车"
        to="/cart"
      />
      <van-goods-action-big-btn
        text="加入购物车"
        @click="scart"
      />
      <van-goods-action-big-btn
        primary
        text="立即购买"
        @click="sbuy"
      />
    </van-goods-action>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pid:'',
      count:1,
      data:{},
      goodpic:[],
      detailpic:[],
      show:false,
      showcart:false,
      showbuy:false,
    };
  },

  methods: {
    load(){
        this.axios.get('http://127.0.0.1:3000/product/detail',{params:{pid:this.pid}}).then((res)=>{
           this.data=res.data.data;console.log(this.data);this.goodpic=res.data.data.goodPic.split(' ');this.detailpic=res.data.data.detailPic.split(' ');
        })
    },
    share(){
      this.show=true;
    },
    back(){
        this.$router.back()
    },
    onCancel(){
      this.show=false
    },
    scart(){this.showcart=true},
    sbuy(){this.showbuy=true},
    pluscart(){
      if(this.count<this.data.stock){this.count++}
    },
    lesscart(){
      if(this.count>1){this.count--}
    },
    addcart(){
      if(!this.$store.state.islogin){
        this.$toast('请登录');
        this.$router.push('/login')
      }else{
        this.axios.get('http://127.0.0.1:3000/product/addcart',{params:{uid:this.$store.state.uid,pid:this.pid,count:this.count}}).then((res)=>{
          if(res.data.code==1){this.showcart=false;this.$toast('添加成功')}else{this.showcart=false;this.$toast('添加失败')}
        })
      }
    }
  },
  created(){
      this.pid=this.$route.params.pid;
      this.load();
  }
}
</script>
<style scoped>
.prodetail{
  height:100%
}
.van-actionsheet p{
  text-align: center;
}

.van-swipe img{
  width:100%;
  
}
div.good-content .good-content-title{
  margin-left: 30px;
  font-size: 14px ;
  font-weight: bold ;
  color:#ED5F11 ;
}
div.good-content .good-newprice{
  background: #ED5F11;
  color:white;
  font-size: 14px;
  border-radius: 3px;
}
div.good-content .good-oldprice{
  color:#B8B8B8;
  font-size: 12px;
}
div.good-content .good-stock{
  color:#ED5F11 ;
  font-size: 14px;
}
div.good-content .good-brand{
  color:#B8B8B8;
  font-size:14px;
  font-weight: lighter
}
div.good-content .good-type{
  display: inline-block;
    border: 2px solid  #ED5F11;
    color:#B8B8B8;
    cursor: pointer;
    font-size: 14px
}
</style>



