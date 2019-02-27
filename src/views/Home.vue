<template>
    <div id='home-container'>
        <van-nav-bar class='vantHeader' >
            <router-link to="" slot="left" id='vantTitle'>漫骆驼 - 二次元正版电商,购有爱！</router-link>
            <van-icon name="search" slot="right" color='#fff' size='20px'/>
        </van-nav-bar>
        <van-tabs @click="onClick" sticky animated>
            <van-tab title="首页">
                <van-swipe :autoplay="2000" indicator-color='#ff8600'>
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img style="width:100%" :src='image'/>
                    </van-swipe-item>
                </van-swipe>
                <van-row type="flex" justify="space-around">
                    <van-col span="6">
                        <router-link to="/newslist">
                            <img src="../assets/img/commom/icon_indexn_01.png" alt="" style="width:60px">
                            <div class="mui-media-body">新品预售</div>
                        </router-link>
                    </van-col>
                    <van-col span="6">
                        <router-link to="/newslist">
                            <img src="../assets/img/commom/icon_indexn_02.png" alt="" style="width:60px">
                            <div class="mui-media-body">特价闪购</div>
                        </router-link>
                    </van-col>
                    <van-col span="6">
                        <router-link to="/newslist">
                            <img src="../assets/img/commom/icon_indexn_03.png" alt="" style="width:60px">
                            <div class="mui-media-body">品牌街</div>
                        </router-link>
                    </van-col>
                    <van-col span="6">
                        <router-link to="/newslist">
                            <img src="../assets/img/commom/icon_indexn_04.png" alt="" style="width:60px">
                            <div class="mui-media-body">联系客服</div>
                        </router-link>
                    </van-col>
                </van-row>
                <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                    <van-cell v-for="(e,i) of prolist" :key="i"  @click="todetail(e.pid)">
                        <van-card :price="e.price" :desc="e.brand"   :title="e.title" :origin-price="e.oldprice" >
                            <img :src="e.goodPic.split(' ')[0]" alt="" slot="thumb">
                            <div slot="footer">
                                <van-button size="mini" >查看详情</van-button>
                            </div>
                        </van-card>
                    </van-cell>
                </van-list>   
            </van-tab>
            <van-tab title="分类">
                内容 2
            </van-tab>
        </van-tabs>
        
    </div>
</template>
<script>

export default {

    data(){return{
        prolist:[],
        size:2,
        active:0,
        loading: false,
        finished: false,
        images: [
        './img/head/big1.jpg',
        './img/head/big2.jpg',
        './img/head/big5.jpg',
        './img/head/big6.jpg',
        ],
    }},
    created(){
        this.load()
    },
    methods: {
        onClick(index, title) {
            this.$toast(title);
        },
        load(){
            console.log('加载数据中');
            this.axios.get('http://127.0.0.1:3000/product/homelist',{params:{size:this.size}}).then((res)=>{console.log(res.data);if(res.data.code==1){this.prolist=res.data.data}}) 
        },
        onLoad() {
            console.log('加载more数据中');
            // 异步更新数据
            setTimeout(() => {
               if(this.prolist.length>=this.size){this.size+=2;this.axios.get('http://127.0.0.1:3000/product/homelist',{params:{size:this.size}}).then((res)=>{if(res.data.code==1){this.prolist=res.data.data;};this.loading = false;})}
                // 数据全部加载完成
                   else if (this.prolist.length < this.size) {
                       /* 加载状态结束 */
                    this.loading = false;
                    this.finished = true;
                    this.toast('没有更多数据了');
                    }
                
            }, 500);
        },
        todetail(i){
            console.log('跳')
            this.$router.push('/detail/'+i)
        }
        },
}
</script>
<style>
.vantHeader{
    background: linear-gradient(#ffad52,#ff8600) !important;
    width:100%;
    height:46px;
    border:0
}
#vantTitle{
    color:#fff;
    font-size: 18px;
}
.van-tabs .van-tab{
    font-weight: bold;
}
.van-col{
    text-align: center
}
.van-col div{
    font-size: 12px;
    color:#000
}



</style>