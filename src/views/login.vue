<template>
    <div class='login' >
        <van-nav-bar class='vantHeader' @click-left="back">
            <van-icon name="arrow-left" slot="left" color='#fff' size='18px' />
            <span to="" slot="left" style="display:inline-block;font-size:18px;color:white;transform: translateY(5%)">返回</span>
        </van-nav-bar>
        <van-row style="margin-top:30px">
            <van-col span="6">
                <van-icon name="manager"  color='#000' size='30px' style="transform: translateY(10%);display:inline-block"/>
            </van-col>
            <van-col span="16">
                <input type="text" v-model="uname" placeholder="请输入用户名">
            </van-col>
        </van-row>
        <van-row style="margin-top:30px">
            <van-col span="6">
                <van-icon name="coupon"  color='#000' size='30px' style="transform: translateY(10%);display:inline-block"/>
            </van-col>
            <van-col span="16">
                <input type="password" v-model="upwd" placeholder="请输入密码">
            </van-col>
        </van-row>
        <van-row style="margin-top:30px"  type="flex" justify="center">
            <van-col span="20">
               <button style="width:100%;background:linear-gradient(#ffad52,#ff8600);color:white;font-size:20px" @click="log">登陆</button>
            </van-col>
        </van-row>
        <van-row style="margin-top:30px" type="flex" justify='space-around'>
            <van-col span="9" style='text-align:left;padding-left:5px;font-size:16px;color:#ff8600'>
                注册新用户
            </van-col>
            <van-col span="9" style='text-align:right;font-size:16px;color:#656d78'>
                忘记密码？
            </van-col>
        </van-row>
        <hr style="margin-top:30px;opacity:0.3;margin-left:30px;margin-right:30px">
        <van-row style="margin-top:30px;" type="flex" justify='center'>
            <van-col span="24" style='text-align:center;font-size:16px;color:grey;transform: translateY(-43px)'>
                <span style="background:white;z-index:1">其他方式登录</span> 
            </van-col> 
        </van-row>
        <van-row style="margin-top:30px" type="flex" justify='center'>
            <van-col span="4" style='font-size:16px;color:#656d78'>
                QQ
            </van-col>
            <van-col span="4" style='font-size:16px;color:#656d78'>
                微信
            </van-col>
        </van-row>
    </div>
</template>
<script>

export default {
  data() {
    return {
      uname:'',
      upwd:'',
    };
  },

  methods: {
    log(){
        if(!this.uname){this.$toast('用户名不能为空')}else if(!this.upwd){this.$toast('密码不能为空')}else{
            this.axios.post('http://127.0.0.1:3000/user/login','uname='+this.uname+'&upwd='+this.upwd).then((res)=>{console.log(res);if(res.data.code==200){this.$store.commit('signin',{uname:this.uname,uid:res.data.uid});console.log(this.$store.state.uid,this.$store.state.uname);this.$toast('欢迎登陆：'+this.uname);this.$router.back()}else{this.$toast('账号或密码错误')}})
        }
    },
    back() {
      this.$router.back();
    }
  }
}
</script>
<style scoped>
    
</style>

