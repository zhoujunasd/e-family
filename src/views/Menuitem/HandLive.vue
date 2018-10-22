<template>
    <div class="hand-content">
        <div class="top-img">
            <img src="../../assets/imgs/timg.jpg" alt="">
        </div>
        <div class="content-list clearfix">
            <router-link to="/menu/8" class="listitem fll">
                <img src="../../assets/imgs/icon1.png" alt="">
                <div class="title">政治学习</div>
            </router-link>
            <router-link to="/audit" class="listitem fll">
                <img src="../../assets/imgs/icon2.png" alt="">
                <div class="title">思想汇报</div>
            </router-link>
            <router-link to="/audit" class="listitem fll">
                <img src="../../assets/imgs/icon3.png" alt="">
                <div class="title">心得总结</div>
            </router-link>
            <router-link to='/LifeChoice'  class="listitem fll">
                <img src="../../assets/imgs/icon4.png" alt="">
                <div class="title">民主评议</div>
            </router-link>
            <router-link to="/bmap" class="listitem fll">
                <img src="../../assets/imgs/icon5.png" alt="">
                <div class="title">流动党员找组织</div>
            </router-link>
        </div>
        <div v-if='isrouter' class="rout-wrap">
            <div class="btn-wrap">
                <router-link to='/personalsummary'>
                    <mt-button type="danger" size="normal">个人总结</mt-button>
                </router-link>
                <router-link to="/discuss">
                    <mt-button type="danger" size="normal">民主评议</mt-button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Button } from "mint-ui";
    export default {
        name: 'handLive',
        components:{ Button },
        data(){
            return{
                isrouter: false,
            }
        },
        methods: {
            // handleclick(){
            //     @click.native="handleclick"
            //     this.isrouter = true
            // }
        },
        watch:{
            $route(){
                if(this.$route.path == '/LifeChoice'){
                    this.isrouter = true
                }else{
                    this.isrouter = false
                }
            }
        },
        created(){
            if(this.$route.path == '/LifeChoice'){
                    this.isrouter = true
            }else{
                    this.isrouter = false
            }
        }
    }
</script>

<style scoped lang='scss'>
.rout-wrap{
    position: fixed;
    top: 45px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    background-color: #fff;
    .btn-wrap{
        position: absolute;
        top:40%;
        left: 50%;
        transform: translate(-50%,-50%);
        .mint-button{
            width: 100%;
        }
    }
}
    .top-img{
        img{
            display: block;
            width: 100%;
        }
    }
    .content-list{
        .listitem{
            width: 33.3%;
            height: 100%;
            padding: .3rem .4rem;
            box-sizing: border-box;
            img{
                display: block;
                width: 1.7rem;
                height: 1.7rem;
                margin-bottom: .1rem;
            }
            .title{
                width: 1.7rem;
                line-height: 1.5;
                text-align: center;
                font-size: .28rem;
            }
        }
    }
</style>