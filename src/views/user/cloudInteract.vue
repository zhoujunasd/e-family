<template>
  <div class="interact-content">
    <div infinite-scroll-disabled="loading" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
      <div class="inter-item" v-for="(item,index) in rows" :key='index'>
        <div class="inter-top .clearfix">
          <div class="top-left fll">
            <img :src="item.header" alt="">
          </div>
          <div class="top-center fll ">
            <div class="top-nsername">{{item.username}}</div>
            <div class="top-date">
              <div><i class="iconfont icon-date-2"></i>{{item.currentTime}}</div>
              <div><i class="iconfont icon-laba"></i>{{item.type == 1 ? '公开':'私密'}}</div>
            </div>
          </div>
          <div class="top-right flr">党员互动</div>
        </div>
        <div class="inter-center">{{item.content}}</div>
        <div class="inter-bottom " @click="huifuhandle(item)">
          <i class="iconfont icon-huifu"></i>回复
        </div>
      </div>
    </div>
    <div class="addicon" @click="add_content"><i class="iconfont icon-jiahao-copy-copy"></i></div>
    <div v-show='add_wrap' class="addcontent-wrap" @click.self="quxaio_add">
      <form action="" class="addcontent clearfix">
        <textarea class="textar" v-model="text_cont" name="" id="" cols="30" rows="10"></textarea>
        <input class="fll fabu" type="button" value='发布' @click="addcontent">
        <input class="flr quxaio" type="button" value="取消" @click="quxaio_add">
      </form>
    </div>
    <isLoading v-model="hasmeasage" :icon='true'></isLoading>
  </div>
</template>

<script>
import { MessageBox, Toast, InfiniteScroll } from "mint-ui";
import isLoading from "../../components/Loading";
export default {
  name: "codeInteract",
  components: { isLoading },
  data() {
    return {
      rows: [],
      text_cont: "",
      page: 1,
      type: 0,
      cates: 0,
      hasmeasage: true,
      loading: true,
      add_wrap: false
    };
  },
  methods: {
    addcontent() {
      this.$axios
        .post("/forum/saveForum.do", { content: this.text_cont, type: 1 })
        .then(res => {
          // console.log(res);
          this.add_wrap = false;
          Toast({
            message: res.msg,
            position: "top",
            duration: 500
          });
          setTimeout(() => {
            this.rows = [];
            this.page = 1;
            this.getData();
          }, 1000);
        })
        .catch(err => {
          MessageBox("网络错误", "请检查网络链接！！！");
        });
    },
    add_content() {
      this.add_wrap = true;
    },
    quxaio_add() {
      this.add_wrap = false;
    },
    huifuhandle(val) {
      this.$store.commit("CHANGE_ROW", val);
      this.$router.push("/interactionDetail");
      // console.log(this.$store.state.row);
    },
    getData() {
      this.$axios
        .get(
          `/forum/forumList.do?page=${this.page}&rows=10&type=${
            this.type
          }&cates=0`
        )
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            this.rows = this.rows.concat(res.rows);
            if (res.rows == 0) {
              this.hasmeasage = false;
              this.loading = true;
            } else {
              this.loading = false;
            }
          } else {
            Toast({
              message: res.msg,
              iconClass: "iconfont icon-cuowu",
              position: "top",
              duration: 500
            });
          }
        })
        .catch(err => {
          MessageBox("网络出错", "请检查网络链接！！！");
        });
    },
    loadMore() {
      this.page++;
      this.getData();
    }
  },
  created() {
    this.getData();
  }
};
// 1 history.go(0)
// 2 location.reload()
// 3 location=location
// 4 location.assign(location)
// 5 document.execCommand('Refresh')
// 6 window.navigate(location)
// 7 location.replace(location)
// 8 document.URL=location.href
// 这几个都可以刷新：
// window.location.reload();刷新
// window.location.href=window.location.href;刷新
// window.close();关闭窗口，不弹出系统提示，直接关闭
// window.close()相当于self属性是当前窗口
// window.parent.close()是parent属性是当前窗口或框架的框架组
</script>

<style scoped lang='scss'>
.addcontent-wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.5);
  .addcontent {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #f1f1f1;
    box-sizing: border-box;
    padding: 10px;
    .textar {
      width: 100%;
      height: 100px;
      font-size: 16px;
      line-height: 1.2;
      border: none;
      border-radius: 5px;
      margin-bottom: 10px;
    }
    input {
      font-size: 14px;
      line-height: 26px;
      padding: 0 5px;
      border-radius: 5px;
    }
    .fabu {
      border-color: transparent;
      background-color: #ef473a;
      color: #fff;
    }

    .fabu:focus,
    .quxaio:focus,
    .textar:focus {
      outline: none;
    }
  }
}

.addicon {
  position: fixed;
  right: 10px;
  bottom: 60px;
  z-index: 99;
  i {
    font-size: 50px;
    color: red;
    background-color: #fff;
  }
}
.interact-content {
  font-size: 16px;
  background: #ccc;
}
.inter-item {
  box-sizing: border-box;
  padding: 16px;
  background: #fff;
  margin-bottom: 10px;
  .inter-top {
    // display: flex;
    // justify-content: space-between;
    .top-left {
      width: 40px;
      height: 40px;
    }
    height: 45px;
    .top-right {
      color: red;
      height: 20px;
      line-height: 20px;
      border: 1px solid red;
      font-size: 12px;
      padding: 2px 8px;
      // 胶囊样式
      border-radius: 15%/50%;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .top-nsername {
      height: 20px;
      font-size: 18px;
      color: #333;
      font-weight: 600;
      margin: 5px 0;
    }
    .top-date {
      font-size: 12px;
      color: #444;
      display: flex;
      i {
        margin: 5px;
      }
    }
    .top-center {
      padding-left: 10px;
    }
  }
  .inter-center {
    height: 20px;
    margin: 10px 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .inter-bottom {
    text-align: right;
  }
}
</style>