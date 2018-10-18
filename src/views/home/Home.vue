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
    <Spinner class="spinner" v-if='!swiper' :size="60" type="double-bounce"></Spinner>
    <swiper v-else :options="swiperOption">
      <swiper-slide v-for="(item,index) in swiper" :key="index">
        <div @click="todetails(item.url)" class="item">
          <img :src="item.imgUrl" alt="" class="swiperitem">
          <div class="info">{{item.title}}</div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
    <div class="main-menu">
      <div class="row">
        <router-link to="/menu/0" class="menu-item">
          <div>
            <img src="../../assets/imgs/icon_01.png" alt="">
          </div>
          <div class="menu-item-title">信工新闻眼</div>
        </router-link>
        <router-link to="/handlive" class="menu-item">
          <div>
            <img src="../../assets/imgs/icon_02.png" alt="">
          </div>
          <div class="menu-item-title">掌上组织生活</div>
        </router-link>
        <router-link to="/cloud" class="menu-item">
          <div>
            <img src="../../assets/imgs/icon_03.png" alt="">
          </div>
          <div class="menu-item-title">党员云互动</div>
        </router-link>
      </div>
      <div class="row">
        <router-link to="/menu/3" class="menu-item">
          <div>
            <img src="../../assets/imgs/icon_04.png" alt="">
          </div>
          <div class="menu-item-title">党建一点通</div>
        </router-link>
        <router-link to="/menu/5" class="menu-item">
          <div>
            <img src="../../assets/imgs/icon_05.png" alt="">
          </div>
          <div class="menu-item-title">党员量身份</div>
        </router-link>
        <router-link to="/his_tody" class="menu-item">
          <div>
            <img src="../../assets/imgs/icon_06.png" alt="">
          </div>
          <div class="menu-item-title">党史上的今天</div>
        </router-link>
      </div>

    </div>
    <div class="banner">
      <img src="../../assets/imgs/banner01.png" alt="">
    </div>
    <div class="home-bottom">
      <div class="bottom-left">
      </div>
      <div class="bottom-right">
        <div class="bottom-row">
          <router-link to='/menu/6'></router-link>
          <router-link to='/anyphoto'></router-link>
        </div>
        <div class="bottom-row">
          <router-link to='/menu/4'></router-link>
          <router-link to='/menu/1'></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { MessageBox, Spinner } from "mint-ui";

export default {
  name: "home",
  data() {
    return {
      swiper: null,
      swiperOption: {
        // autoplay: true,
        pagination: {
          el: ".swiper-pagination"
          // autoplay: true
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide,
    Spinner
  },
  methods: {
    todetails(newsId){
      // console.log(newsId);
      this.$router.push({name: 'men_art',params: {id: newsId}})
    },
    getSwiper() {
      this.$axios.get("/carousel/carouselList.do", { type: 0 }).then(res => {
        // console.log(res);
        if (res.code == 1) {
          this.swiper = res.rows;
          // this.$message.info('aaa')
        } else {
          MessageBox("错误", "网络请求超时");
        }
      });
    },
  },
  watch:{

  },
  mounted() {},
  computed: {},
  created() {
    this.getSwiper();
  }
};
</script>
<style scoped lang='scss'>
.spinner {
  width: 100%;
  height: 3.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home {
  .home-title {
    background-color: skyblue;
  }
  .item {
    width: 100%;
    height: 3.85rem;
  }
  .swiperitem {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .info {
    position: absolute;
    // width: 100%;
    // height: 0.4rem;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 4px;
    color: #fff;
    width: 100%;
    height: 0.4rem;
    font-size: 0.28rem;
    background: rgba(0, 0, 0, 0.5);
  }
}
.main-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 3.94rem;
  // background-color: #000;
  background: url("../../assets/imgs/bt_bg.png") no-repeat;
  background-size: 100%;
  z-index: 12;
  .row {
    display: flex;
    .menu-item {
      flex: 1;
      text-align: center;
      // border: 1px solid #000
    }
    .menu-item-title {
      font-size: 0.24rem;

      height: 0.4rem;
      line-height: 0.4rem;
    }
    img {
      width: 1rem;
    }
  }
}
.banner {
  width: 100%;
  img {
    display: block;
    width: 100%;
  }
}
.home-bottom {
  width: 100%;
  height: 3.3rem;
  background: url("../../assets/imgs/专栏.png") no-repeat;
  background-size: 100%;
  display: flex;
  .bottom-right {
    flex: 2;
    .bottom-row {
      height: 50%;
      display: flex;
      a {
        flex: 1;
        width: 2.5rem;
        height: 1.65rem;
      }
    }
  }
  .bottom-left {
    flex: 1;
  }
}
</style>

