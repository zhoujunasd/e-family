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
            <router-link to="/" class="listitem fll">
                <img src="../../assets/imgs/icon2.png" alt="">
                <div class="title">思想汇报</div>
            </router-link>
            <router-link to="/" class="listitem fll">
                <img src="../../assets/imgs/icon3.png" alt="">
                <div class="title">心得总结</div>
            </router-link>
            <router-link to="/" class="listitem fll">
                <img src="../../assets/imgs/icon4.png" alt="">
                <div class="title">民主评议</div>
            </router-link>
            <router-link to="/bmap" class="listitem fll">
                <img src="../../assets/imgs/icon5.png" alt="">
                <div class="title">流动党员找组织</div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'handLive',
    }
</script>

<style scoped lang='scss'>
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