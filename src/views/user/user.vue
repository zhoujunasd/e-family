<template>
    <div class="user-content">
        <div class="top-message">
            <div class="top-img">
                <img src="../../assets/imgs/bt_bg.png" alt="">
            </div>
            <div class="top-title">
                <div v-if="info">{message}</div>
                <router-link to="/login" v-else>你还没有登录，请登录</router-link>
            </div>
        </div>
        <div class="user-content">
            <div class="user-menu">
                <router-link class="menu-item" to="/">
                    <img class="icon-left" src="../../assets/imgs/icon_01.png" alt="">个人信息<img class="icon-right" src="../../assets/imgs/right.png" alt="">
                </router-link>
                <router-link class="menu-item" to="/">
                    <img class="icon-left" src="../../assets/imgs/icon_02.png" alt="">个人量化积分<img class="icon-right" src="../../assets/imgs/right.png" alt="">
                </router-link>
                <router-link class="menu-item" to="/">
                    <img class="icon-left" src="../../assets/imgs/icon_03.png" alt="">修改密码<img class="icon-right" src="../../assets/imgs/right.png" alt="">
                </router-link>
                <router-link class="menu-item" to="/">
                    <img class="icon-left" src="../../assets/imgs/icon_04.png" alt="">党费缴纳<img class="icon-right" src="../../assets/imgs/right.png" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "user",
  components:{
  },
  data(){
      return{
          info: false
      }
  }
};
</script>

<style scoped lang='scss'>
.user-content {
  .top-message {
    background-color: #c50206 !important;
    height: 2.8rem;
    width: 100%;
    .top-img {
      text-align: center;
      img {
        // display: block;
        margin-top: 0.72rem;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
      }
    }
    .top-title {
      text-align: center;
      font-size: 0.26rem;
      color: #ddd;
    }
  }
}
.user-content {
  width: 100%;
  .user-menu {
    width: 100%;
    .menu-item {
      display: block;
      padding: 0.32rem 1.08rem;
      position: relative;
      margin: -1px;
      font-size: 0.32rem;
      font-weight: 700;
      color: #666;
      background-color: #fff;
      border: 1px solid #ddd;
      .icon-left {
        position: absolute;
        top: 0;
        left: 0.22rem;
        padding: 0.2rem 0;
        width: 0.68rem;
        height: 0.68rem;
        border-radius: 50%;
      }
      .icon-right {
        position: absolute;
        top: 0;
        right: 0.22rem;
        padding: 0.4rem 0;
        height: 0.28rem;
        width: 0.16rem;
      }
    }
  }
}
</style>