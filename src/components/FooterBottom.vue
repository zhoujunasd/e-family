<template>
    <div class="route-link">
        <router-link to="/index" class="tabs"  :class="{active: $route.name == 'index'}">
            <i class="icon-dangwugongkai iconfont"></i> 
            <div>首页</div>
        </router-link>
        <router-link to="/notice" class="tabs" :class="{active: $route.name == 'notice'}">
            <i class="icon-xiaoxi iconfont"></i>
            <div>通知早知道</div>
        </router-link>
        <router-link to="/user" class="tabs" :class="{active: $route.name == 'user'}">
            <i class="icon-wo-native iconfont"></i>
            <div>我的党建</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "FooterBottom",
        methods:{
        }
    }
</script>

<style scoped lang='scss'>
.route-link{
    display: flex;
    width: 100%;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 10px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #f1f1f1;
    .tabs{
        flex: 1;
        text-align: center;
        border-top: 2px solid transparent;
        padding-top: 2px;
    }
    .iconfont{
        font-size: 24px;
    }
    .active{
        color: #c7000a;
        border-top: 2px solid #c7000a;
    }
}
</style>