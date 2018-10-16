<template>
  <div class="content">
    <div class="notice-message" v-for="(item,index) in rows" :key='index'>
      <router-link class="router-item" to="/">
        <div class="message-left">
          <img :src="item.pic" alt="">
        </div>
        <div class="message-right">
          <div class="message-title">{{item.title}}</div>
          <div class="message-time">{{item.createTime}}</div>
        </div>
      </router-link>
    </div>
    <div class="no-message">
      <Spinner class="spinner" v-if='hasMessage' type="snake" color="#26a2ff"></Spinner>
      <div v-else>没有数据了</div>
    </div>
  </div>
</template>

<script>
import { MessageBox, Spinner } from "mint-ui";
export default {
  name: "notice",
  components: {
    Spinner
  },
  data() {
    return {
      rows: [],
      hasMessage: true,
      page: 1
    };
  },
  methods: {
    add0(m){
      return m < 10 ? "0" + m : m;
    },
    getTimer(timestr) {
      let time = new Date(timestr);
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var mm = time.getMinutes();
      var s = time.getSeconds();
      return (y+"-"+this.add0(m)+"-"+this.add0(d)+" "+this.add0(h)+":"+this.add0(mm)+":"+this.add0(s));
    },
    getData() {
      this.$axios
        .get(`news/newsList.do?page=${this.page}&rows=10&type=2`).then(res => {
          console.log(res);
          if (res.code == 1) {
            res.rows.map(item => { 
              item.createTime = this.getTimer(item.createTime)
              return item
            })
            this.rows = this.rows.concat(res.rows);
            // this.rows = res.rows;
            if (res.rows != "") {
              this.page++;
              this.getData();
            } else {
              this.hasMessage = false;
            }
          } else {
            MessageBox("错误", "网络请求出错！");
          }
        })
        .catch(err => {
          MessageBox.alert("请检查网络！", "请求超时");
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.content {
  padding: 0;
  margin: 0;
  display: block;
}
.notice-message {
  padding: 0.2rem;
  display: flex;
  border-bottom: 2px solid #f2f2f2;
  .router-item {
    display: flex;

    .message-left {
      img {
        display: block;
        padding: 0.1rem;
        width: 1.2rem;
        height: 1.3rem;
        background: no-repeat;
        background-size: 100%;
        border-radius: 10%;
      }
    }
    .message-right {
      padding: 0.1rem;
      .message-title {
        height: 0.8rem;
        line-height: 1.2;
        font-size: 0.3rem;
        font-weight: 500;
      }
      .message-time {
        font-size: 0.24rem;
        color: #888;
        padding: 0.1rem 0;
      }
    }
  }
}
.no-message {
  text-align: center;
  padding: 0.2rem 0;
  color: #666;
  font-size: 0.28rem;
  .spinner {
    display: inline-block;
    text-align: center;
  }
}
</style>