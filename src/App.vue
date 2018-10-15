<template>
  <div id="app">
    <HeaderTop></HeaderTop>
    <div class="content">
      <router-view/>
    </div>
    <FooterBottom></FooterBottom>
  </div>
</template>

<script>
import FooterBottom from './components/FooterBottom.vue'
import HeaderTop from './components/HeaderTop.vue'
  export default {
    name: 'app',
    components:{
      FooterBottom,
      HeaderTop
    }
  }
</script>

<style lang="scss">
.content{
  // margin-top: 45px;
  // padding-bottom: 1.12rem;;
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
  list-style:none;
}

a,a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}
</style>
