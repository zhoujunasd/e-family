<template>
    <div class="point-content">
        <div class="banner">
            <img src="../../assets/imgs/jifen.png" alt="">
            <span class="point">{{point}}</span>
        </div>
        <router-link class="menu-item" to="/pointDetail">
            <img class="icon-left" src="../../assets/imgs/icon_01.png" alt="">积分明细<img class="icon-right" src="../../assets/imgs/right.png" alt="">
        </router-link>
        <div class="point-ruler">
            <div class="point-item">积分规则</div>
            <div class="wenhao"><img src="../../assets/imgs/wenhao.png" alt=""></div> 
        </div>
        <div class="ruler-item">
          <div class="clearfix point-item">
            <span class="fll">登陆APP</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">完善个人信息</span>
            <span class="flr point-right">2</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">查看积分</span>
            <span class="flr point-right">1</span>
          </div>
          <div class="clearfix point-item ">
            <span class="fll">按时交纳党费</span>
            <span class="flr point-right">10</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">查看通知</span>
            <span class="flr point-right">2</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">了解学院工作动态</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">上交思想汇报经审核通过</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">认真撰写心得总结并上交，经审核通过</span>
            <span class="flr point-right">15</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">提交个人总结，并参与评议</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">上交思想汇报经审核通过</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">积极参与互动</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">学习党建知识</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">上交思想汇报经审核通过</span>
            <span class="flr point-right">5</span>
          </div>
          <div class="clearfix point-item">
            <span class="fll">上交思想汇报经审核通过</span>
            <span class="flr point-right">5</span>
          </div>
        </div>
        <div class="point-bottom"></div>
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
          // console.log(res);
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
.point-content{
}
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
  height: 20px;
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
.point-ruler{
  width: 100%;
  height: .68rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: .2rem;
  background-color: #eee;
  .point-item{
    font-size: .28rem;
  }
  .wenhao{
    img{
      display: block;
    }
  }
}
.ruler-item{
  // align-items: center;
  margin-bottom: 50px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  line-height: 34px;
  .point-item{
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 0 12px;
    margin: -1px;
  }
  .point-right{
    color: red;
  }
}
.point-bottom{
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  border: 25px solid #eee;
}
</style>