<template>
    <div class="point-content">
        <div class="banner">
            <img src="../../assets/imgs/jifen.png" alt="">
            <span class="point">{{point}}</span>
        </div>
        <router-link class="menu-item" to="/">
            <img class="icon-left" src="../../assets/imgs/icon_01.png" alt="">积分明细<img class="icon-right" src="../../assets/imgs/right.png" alt="">
        </router-link>
        <div class="point-ruler">
            <div class="point-item">
                <mt-cell label="描述信息"></mt-cell>
            </div>
            <div>
                <span>积分规则</span>
                <span><i></i></span>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast, Cell } from "mint-ui";
export default {
  name: "userpoint",
  components: { Cell },
  data() {
    return {
      point: ""
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("/user/userInfo.do")
        .then(res => {
          console.log(res);
          this.point = res.data.totalScore;
        })
        .catch(err => {
          Toast;
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.banner {
  width: 100%;
  position: relative;
  margin-bottom: 0.1rem;
  img {
    display: block;
    width: 100%;
  }
  .point {
    font-size: 0.32rem;
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    transform: translate(-50%, -50%);
  }
}
.menu-item {
  display: block;
  padding: 0.32rem 1.08rem;
  position: relative;
  margin: -1px;
  font-size: 0.32rem;
  font-weight: 500;
  color: #666;
  background-color: #fff;
  border: 1px solid #ddd;
  .icon-left {
    position: absolute;
    top: 0;
    left: 0.22rem;
    padding: 0.2rem 0;
    width: 0.64rem;
    height: 0.64rem;
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
</style>