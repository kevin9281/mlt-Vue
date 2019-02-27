<template>
  <div class="cart">
    <van-nav-bar class='vantHeader' >
            <span to="" slot="left" id='vantTitle'>购物车</span>
    </van-nav-bar>
    <div class='notlog' v-if="!this.$store.state.islogin">
        还没有登陆，请前往 <router-link to="/login">登陆</router-link> 
    </div>
    <div class='notlog' v-if="!(this.list.length>0)&&this.$store.state.islogin">
        购物车里还没有商品，请前往 <router-link to="/">逛一逛</router-link> 
    </div>
    <div v-if="this.$store.state.islogin" style="margin-top:20px;">
        <van-card  v-for="(e,i) of list" :key="i" :num="e.count" :price="e.price" >
            <span slot="title" @click="todetail(e.pid)">{{e.title}}</span>
            <img :src="e.pic" alt="" slot="thumb" @click="todetail(e.pid)">
            <div slot="footer">
                <span >总价：<span style="color:red">￥{{e.count*e.price}}.00元</span></span>
                <van-button size="mini" @click="less(i)">-</van-button>
                <van-button size="mini" @click="more(i)">+</van-button>
                <van-button size="mini" type="danger" style="border:0" @click="cf" :data-pid='e.pid'>删除</van-button>
            </div>
        </van-card>
    </div>
    <div v-if="this.list.length>0" class="certain">
        <div style='width:60%;text-align:center;line-height:33px;color:red'>合计：￥{{total}}.00元</div>
        <div style='width:40%'><button style='width:80%;border:0;background:#ff8600;color:white' >去结算</button></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){return{
      list:[],
      uid:this.$store.state.uid,
  }},
  computed:{
      total(){
          var sum=0;
          for (const i of this.list) {
              sum+=i.count*i.price
          }
          return sum
      }
  },
  methods:{
      load(){
          this.axios.get('http://127.0.0.1:3000/user/islogin').then((res)=>{
          if(res.data.ok==0){this.$store.commit('signout');console.log(this.$store.state.uid)}else if(res.data.ok==1){
            this.$store.commit('signin',{uname:res.data.uname,uid:res.data.uid});
          console.log('获取购物车数据',this.$store.state.uid);
          this.uid=this.$store.state.uid;
          console.log(this.uid);
          this.axios.get('http://127.0.0.1:3000/product/shoppingcart',{params:{uid:this.uid}}).then((res)=>{
              console.log(res.data);
              if(res.data.code==1){this.list=res.data.data}else{this.list=[]}
          })
          }
        })
      },
      todetail(i){
          console.log('去详情页');
          this.$router.push('/detail/'+i)
      },
      cf(e){
          this.$dialog.confirm({
              title: '删除购物车',
              message: '是否将此商品删除'
          }).then(() => {
            // on confirm
            this.axios.get('http://127.0.0.1:3000/product/deletecart',{params:{uid:this.uid,pid:e.target.dataset.pid}}).then((res)=>{if(res.data.code==1){this.$toast('删除成功');this.load()}else{this.$toast('删除失败')}})
            }).catch(() => {
            // on cancel
            });
      },
      less(i){
          if(this.list[i].count>1){
          this.list[i].count-=1;
          this.axios.get('http://127.0.0.1:3000/product/updatecart',{params:{uid:this.uid,pid:this.list[i].pid,count:this.list[i].count}}).then((res)=>{
              console.log(res.data)
          })
          }
      },
      more(i){
        if(this.list[i].count<10){
          this.list[i].count+=1;
          this.axios.get('http://127.0.0.1:3000/product/updatecart',{params:{uid:this.uid,pid:this.list[i].pid,count:this.list[i].count}}).then((res)=>{
              console.log(res.data)
          })
          }
      }
  },
  
  created(){
      
      this.load();
  },
  props: {
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notlog{
    width:100%;
    margin-top: 100px;
    text-align: center;
}
.certain{
position:fixed;
bottom:7.5%;
width:100%;
display:flex;
justify-content: space-between;
border-top: 1px solid gainsboro;
border-bottom: 1px solid gainsboro
}
</style>

