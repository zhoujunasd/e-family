<template>
  <div id="app">
    <HeaderTop v-if='topShow'></HeaderTop>
    <HeaderTitle v-else></HeaderTitle>
    <div class="content">
      <router-view/>
    </div>
    <FooterBottom v-if='botShow'></FooterBottom>
  </div>
</template>

<script>
import FooterBottom from './components/FooterBottom.vue'
import HeaderTop from './components/HeaderTop.vue'
import HeaderTitle from './components/HeaderTitle.vue'

  export default {
    name: 'app',
    components:{
      FooterBottom,
      HeaderTop,
      HeaderTitle
    },
    computed:{
      botShow(){
        if(this.$route.name == 'login'){
          return false
        }else{
          return true
        }
      },
      topShow(){
        switch(this.$route.name){
          case 'index': return true;
          case 'notice': return true;
          case 'user': return true;
          default: return false
        }
      }
    }
  }
</script>

<style lang="scss">
.content{
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
  list-style:none;
}

a,a:link,a:visited,a:hover,a:active{
  text-decoration: none;
  color:inherit;
}
</style>
