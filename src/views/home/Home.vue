<template>
  <div class="home">
    <!-- <swiper :options="swiperOption" class="swiper-wrap">
      <swiper-slide v-for="(slide, index) in swiper" :key="index" >
          <img :src="slide.imgUrl" alt="">
          <div class="bottom-title">{{slide.title}}</div>
      </swiper-slide>
      <div class="swiper-pagination" solt='pagination'></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
  </swiper> -->
  <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in swiper" :key="index">
          <div class="item">
            <img :src="item.imgUrl" alt="" class="swiperitem">
            <div class="info">{{item.title}}</div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: "home",
  data(){
    return {
      swiper: [],
      swiperOption: {
          autoplay: true,
          pagination: {
            el: '.swiper-pagination',
            autoplay: true
          }
        }
    }
  },
  components: {
    swiper,
    swiperSlide
  },  
  methods:{
    getSwiper(){
      this.$axios.get('/carousel/carouselList.do',{type: 0}).then((res) => {
        // console.log(res);
        if(res.code == 1){
          this.swiper = res.rows
        }else{

        }
      })
    }
  },
  mounted() {
  },
  computed:{

  },
  created(){
    this.getSwiper();
  },
  
};
</script>
<style scoped lang='scss'>
.home{
  .home-title{
    background-color: skyblue;
  }
  .swiperitem{
    position: relative;
    width: 100%;
    height: 3.85rem;
  }
  .info{
    position: absolute;
      // width: 100%;
      // height: 0.4rem;
      bottom: 0.08rem;
      left: 0;
      right: 0;
      z-index: 11;
      padding: 4px;
      color: #fff;
      width: 100%;
      height: 0.4rem;
      font-size: 0.28rem;
      background: rgba($color: #000000, $alpha: 0.5)
  }
}
</style>

