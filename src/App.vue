<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active" active-color="#ff8600">
            <van-tabbar-item icon="home-o" to='/'>主页</van-tabbar-item>
            <van-tabbar-item icon="search" to='/test'>圈子</van-tabbar-item>
            <van-tabbar-item icon="cart" to='/cart'>购物车</van-tabbar-item>
            <van-tabbar-item icon="friends-o" @click="touser">用户中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {

    data(){return{
        active:0,
        
    }},
    created(){
      this.islog();
    },
    updated(){
      this.islog();
    },
    methods: {
      touser(){
        if(this.$store.state.islogin){this.$router.push('/usercenter')}else{this.$router.push('/login')}
      },
      islog(){
        console.log('验证登陆');
        this.axios.get('http://127.0.0.1:3000/user/islogin').then((res)=>{
          if(res.data.ok==0){this.$store.commit('signout');console.log(this.$store.state.uid)}else if(res.data.ok==1){
            this.$store.commit('signin',{uname:res.data.uname,uid:res.data.uid});console.log(this.$store.state.uid)
          }
        }).then(()=>{
            if(this.$route.path=='/login'||this.$route.path=='/usercenter'){this.active=3;this.touser()}else if(this.$route.path=='/test'){this.active=1}else if(this.$route.path=='/cart'){this.active=2;this.$router.push('/cart')}else if(this.$route.path=='/'){this.active=0}
        })
      }
    },
}
</script>

<style>
body{
 background: #fff !important
}
*{margin:0;padding:0;}
div{
	box-sizing: border-box;
}

</style>
