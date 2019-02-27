import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false,
    uid:'',
    uname:'',
  },
  mutations: {
    signin(state,obj){state.islogin=true;state.uname=obj.uname;state.uid=obj.uid},
    signout(){this.state.islogin=false;this.state.uname='';this.state.uid=''},
  },
  actions: {

  }
})
