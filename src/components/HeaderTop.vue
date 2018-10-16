<template>
    <div class="header-top">
        <div v-if="isShow" class="home">
            <img class="top-img" src="../assets/imgs/logo.png" alt="">
            <a href="#/login">登录</a>
        </div>
        <div v-else class="top-title">
            <div>{{ $route.name == 'notice' ? '通知早知道' : '我的党建' }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // isShow: true,
                active: ''
            }
        },
        name:'headerTop',
        computed:{
            isShow(){
                if(this.$route.name == 'index'){
                    return true
                }else{
                    return false
                }
            } 
        },
        // watch:{
        //     $route(){
        //         console.log(this.$route);
                
        //         if(this.$route.name == 'index'){
        //             this.isShow = true
        //         }else{
        //             this.isShow = false
        //         }
        //     }
        // }
    }
</script>

<style scoped lang='scss'>
.header-top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #c50206!important;
    z-index: 998;
    .home{
        height: 0.68rem;
        line-height: 0.68rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        a{
            align-items: center;
            color: #fff;
            font-size: 0.34rem;
            font-weight: 400
        }
        a img{
            padding: 2px;
        }
    }
    .top-img{
        width: 2.6rem;
    }
    .top-title{
        height: 0.68rem;
        line-height: 0.68rem;
        padding: 5px;
        color: #fff;
        font-size: 0.36rem;
        text-align: center;
    }
}
</style>