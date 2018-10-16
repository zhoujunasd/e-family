<template>
    <div class="menu-wrap">
        <div class="menu-item" v-for="(item,index) in rows" :key='index'>
            <router-link class="router" :to="{name:'men_art', params: {id: item.newsId}}">
                <img :src="item.pic" alt="">
                <div class="msg-right">
                    <h3 class="msg-title">{{item.title}}</h3>
                    <div class="msg-time">
                        <span>{{item.currentTime}}</span>
                        <span><i class="icon-yanjing iconfont"></i>{{item.count}}</span>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import { MessageBox } from "mint-ui";
    export default {
        name: 'listMessage',
        data(){
            return{
                type: this.$route.params.id,
                page: 1,
                rows: [],
                aaaa: 2
            }
        },
        methods:{
            getTitle(){
                // console.log(this.type);
                // console.log(this.$route);
                switch(this.type){
                    case '0': this.$route.meta.title = '信工新闻眼';break;
                    case '3': this.$route.meta.title = '党建一点通';break;
                    case '5': this.$route.meta.title = '党员亮身份';break;
                    default: this.$route.meta.title = ' ';break;
                }
                localStorage.setItem('meta_title',this.$route.meta.title)
            },
            getData(){
                // console.log(this.$route);
                this.$axios.get(`news/newsList.do?page=${this.page}&rows=10&type=${this.type}`).then((res) => {
                    // console.log(res);
                    if(res.code == 1){
                        this.rows = res.rows
                    }else{
                        MessageBox('消息','数据请求失败！')
                    }
                }).catch((err) => {
                    MessageBox('数据请求失败','请检查网络链接！！！')
                })
            },
        },
        created(){
            this.getTitle()
            this.getData()
        }
    }
</script>

<style scoped lang='scss'>
.menu-wrap{
    .menu-item{
        .router{
            display: flex;
            padding: .2rem;
            border-bottom: 1px solid #ccc;
            .msg-right{
                width: 5.3rem;
                height: 1.6rem;
                padding-left: .2rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .msg-title{
                font-size: .32rem;
                font-weight: 500;
                line-height: 1.6;
            }
            .msg-time{
                font-size: .2rem;
                display: flex;
                justify-content: space-between;
            }
        }
        img{
            display: block;
            width: 1.6rem;
            height: 1.6rem;
        }
    }
}
</style>