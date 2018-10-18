<template>
  <div id="app">
    <HeaderTop v-if='topShow'></HeaderTop>
    <HeaderTitle v-else></HeaderTitle>
    <div :class="{contentasd:true, content: topShow}">
      <router-view />
    </div>
    <FooterBottom v-if='topShow'></FooterBottom>
  </div>
</template>

<script>
import FooterBottom from "./components/FooterBottom.vue";
import HeaderTop from "./components/HeaderTop.vue";
import HeaderTitle from "./components/HeaderTitle.vue";
import store from './store'
export default {
  name: "app",
  components: {
    FooterBottom,
    HeaderTop,
    HeaderTitle
  },
  // watch: {
  //   // 在页面渲染之后执行
  //   $route(to, from) {
  //     // console.log(to);
  //     // console.log(from);
  //     if (to.path == '/cloud') {
  //       if(store.state.userData == ''){
  //         // 这样写会在路由跳转至'cloud'页面后。再跳转至'login'页面，
  //         // ‘返回’按钮是go.back(-1)，返回至'cloud'页面，因此会形成一个死循环
  //         this.$router.push("/login");
  //       }
  //     }
  //   }
  // },
  computed: {
    // botShow(){
    //   if(this.$route.name == 'login'){
    //     return false
    //   }else{
    //     return true
    //   }
    // },
    topShow() {
      switch (this.$route.name) {
        case "index":
          return true;
        case "notice":
          return true;
        case "user":
          return true;
        default:
          return false;
      }
    }
  }
};
</script>

<style lang="scss">
// 设置样式，避免所有的样式继承html的font-size = 50px的样式
// body{
//   font-size: 12px;
// }
.contentasd {
  padding-top: 0.88rem;
}
.content {
  padding-top: 0.88rem;
  padding-bottom: 0.92rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}
.fll {
  float: left;
}
.flr {
  float: right;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  width: 0;
}
</style>
