import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MintUI from 'mint-ui'
import Vant from 'vant';
import {Toast} from 'vant';

import 'mint-ui/lib/style.css';
import 'vant/lib/index.css';
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
import './lib/mui/css/icons-extra.css'
//import './lib/mui/js/mui.min.js'
Vue.use(Vant);
Vue.use(MintUI);
Vue.prototype.toast=Toast;
Vue.config.productionTip = false;
axios.defaults.withCredentials=true;
Vue.prototype.axios=axios;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* router.beforeEach((to,from,next)=>{
        console.log('验证登陆',to);
        axios.get('http://127.0.0.1:3000/user/islogin').then((res)=>{
          if(res.data.ok==0){store.commit('signout');console.log(store.state.uid);next()}else if(res.data.ok==1){
            store.commit('signin',{uname:res.data.uname,uid:res.data.uid});console.log(store.state.uid);next()
          }
        })
}) */