<template>
  <div class="usercenter">
    <div class='wel'>欢迎：{{this.$store.state.uname}}</div>
    <button @click="signout">退出登录</button>
  </div>
</template>

<script>
export default {
  data(){return{
      
  }},
  methods:{
      signout(){
          this.axios.get('http://127.0.0.1:3000/user/signout').then((res)=>{if(res.data.code==1){this.$toast('退出成功');this.$store.commit('signout');this.$router.push('/login')}else{this.$toast('退出登录失败')}})
      }
  },
  props: {
    
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wel{
  width:300px;
  height:300px;
  border: 1px solid red
}
</style>

