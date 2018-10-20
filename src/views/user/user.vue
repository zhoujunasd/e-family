<template>
  <div class="user-content">
    <div class="top-message">
      <div class="top-img">
        <img v-if='!userData' src='../../assets/imgs/bt_bg.png' alt="">
        <img v-else :src='userData.header' alt="">
      </div>
      <div class="top-title">
        <div v-if="userData">{{userData.username}}</div>
        <router-link to="/login" v-else>你还没有登录，请登录</router-link>
      </div>
    </div>
    <div class="user-content">
      <div class="user-menu">
        <router-link class="menu-item" v-focus to="/userInfo">
          <img class="icon-left" src="../../assets/imgs/icon_01.png" alt="">个人信息<img class="icon-right" src="../../assets/imgs/right.png" alt="">
        </router-link>
        <router-link class="menu-item" to="/userPoint">
          <img class="icon-left" src="../../assets/imgs/icon_02.png" alt="">个人量化积分<img class="icon-right" src="../../assets/imgs/right.png" alt="">
        </router-link>
        <router-link class="menu-item" to="/editPassword">
          <img class="icon-left" src="../../assets/imgs/icon_03.png" alt="">修改密码<img class="icon-right" src="../../assets/imgs/right.png" alt="">
        </router-link>
        <router-link class="menu-item" to="/partyCost">
          <img class="icon-left" src="../../assets/imgs/icon_04.png" alt="">党费缴纳<img class="icon-right" src="../../assets/imgs/right.png" alt="">
        </router-link>
      </div>
    </div>
    <div v-if="userData" class="user-btn">
      <button @click="layout">退出登录</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user",
  components: {},
  data() {
    return {
      info: false,
    };
  },
  methods: {
    layout() {
      this.$router.push("/login");
      this.$store.commit("GTE_INFO", '');
      this.$store.commit("GTE_TOKEN", '');
    },
    getData(){
      this.$axios.get('user/userInfo.do').then((res) => {
        this.$store.commit("GTE_INFO", res.data);
      })
    }
  },
  directives: {
    focus:{
      inserted:(el,binding)=> {
        // console.log(binding);
        // console.dir(el);
        // console.log(el);
        // console.dir(el.href)
        // el.href = 'http://localhost:8080/#/index'
        // el.hash = "#notice"
        // console.dir(el.hash)
        // console.dir(el.href)
        // console.log(el);
      }
    }
  },
  created(){
    this.getData()
  },
  watch: {

  },
  computed: {
    ...mapState(["userData"]),
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
    margin-bottom: 0.2rem;
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
  .user-btn {
    width: 100%;
    padding: 0.2rem;
    box-sizing: border-box;
    button {
      width: 100%;
      padding: 0 0.24rem;
      border-color: transparent;
      background-color: #ef473a;
      color: #fff;
      margin: 0.2rem 0;
      min-width: 50px;
      min-height: 45px;
      border-radius: 4px;
      vertical-align: top;
      text-align: center;
      text-overflow: ellipsis;
      font-size: 0.32rem;
      line-height: 0.84rem;
    }
  }
}
// http://oowantxlb.bkt.clouddn.com/upload/front/d5a425c8da6bc89f34260914aed7d3ce.png
// http://oowantxlb.bkt.clouddn.com/upload/front/5167b45bcba29c69c5ba024fd62af637.png
// http://oowantxlb.bkt.clouddn.com/upload/front/6257541e9c8e82323646abc6dbc574ab.png
// branchId: 29A1C8A892B84B1AA81C877499F7497F
// education: 31111111
</style>


