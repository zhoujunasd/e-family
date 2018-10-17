<template>
    <div class="menu-wrap " ref='box' infinite-scroll-disabled="loading" v-infinite-scroll="loadBottom" infinite-scroll-distance="10">
      <!-- :bottomDistance='40' :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" -->
        <mt-loadmore  class="menu-loadmore" :autoFill='false' :topDistance='60'  :top-method="loadTop"  ref="loadmore">
            <div class="menu-item" v-for="(item,index) in rows" :key='index'>
                <router-link class="router" :to="{name:'men_art', params: {id: item.newsId}}">
                    <img :src="item.pic" alt="">
                    <div class="msg-right">
                        <h3 class="msg-title">{{item.title}}</h3>
                        <div class="msg-time">
                            <span>{{item.currentTime}}</span>
                            <span class="span-left"><i class="icon-yanjing iconfont"></i>{{item.count}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
            <!-- slot='bottom' -->
            <div class="no-message">
                <Spinner class="spinner" v-if='hasMessage' type="snake" color="#26a2ff"></Spinner>
                <div v-else>没有数据了</div>
            </div>
        </mt-loadmore>
    </div>
</template>

<script>
import { MessageBox, Spinner, Loadmore, InfiniteScroll  } from "mint-ui";
export default {
  name: "listMessage",
  components: { Spinner,Loadmore },
  data() {
    return {
      type: this.$route.params.id,
      page: 1,
      rows: [],
      hasMessage: true,
      // allLoaded: false
      loading: true
    };
  },
  methods: {
    // handleScroll(){
    //   // console.log(this.$refs.loadmore.$el.scrollTop)
    //   // console.log(this.$refs.loadmore.$el.scrollHeight)
    //   // console.log(this.$refs.loadmore.$el.clientHeight)
    //   // console.log(this.$refs.loadmore.$el.childNodes[0].scrollTop)
    //   // console.log(this.$refs.loadmore.$el.childNodes[0].scrollHeight)
    //   // console.log(this.$refs.loadmore.$el.childNodes[0].clientHeight )
    //   // console.log(this.$refs.loadmore)
    //   // 是否可以上拉的属性
    //   // this.$refs.loadmore.bottomReached = true
    // },
    getTitle() {
      // console.log(this.type);
      // console.log(this.$route);
      switch (this.type) {
        case "0":
          this.$route.meta.title = "信工新闻眼";
          break;
        case "1":
          this.$route.meta.title = "特色活动";
          break;
        case "3":
          this.$route.meta.title = "党建一点通";
          break;
        case "4":
          this.$route.meta.title = "制度建设";
          break;
        case "5":
          this.$route.meta.title = "党员亮身份";
          break;
        case "6":
          this.$route.meta.title = "随时随地学";
          break;
        case "8":
          this.$route.meta.title = "政治学习";
          break;
        default:
          this.$route.meta.title = " ";
          break;
      }
      localStorage.setItem("meta_title", this.$route.meta.title);
    },
    getData() {
      // console.log(this.$route);
      this.$axios
        .get(`news/newsList.do?page=${this.page}&rows=10&type=${this.type}`)
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            // this.rows = res.rows
            this.rows = this.rows.concat(res.rows);
            if(res.rows == ''){
                this.hasMessage = false;
                // this.allLoaded = true; // 若数据已全部获取完毕
                this.loading = true; 
            }else{
              this.loading = false; 
            }
          } else {
            MessageBox("消息", "数据请求失败！");
          }
        })
        .catch(err => {
          MessageBox("数据请求失败", "请检查网络链接！！！");
        });
    },
    loadTop() {
      // 加载更多数据
      this.rows = [];
      this.page = 1;
      this.hasMessage = true
      this.getData();
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom() {
        // 加载更多数据
        this.page++
        this.getData()
        // this.allLoaded = true;
        this.$refs.loadmore.onBottomLoaded();
    }
  },
  watch: {},
  created() {
    this.getTitle();
    this.getData();
    // vue绑定scroll事件
    // window.addEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped lang='scss'>
.menu-wrap {
  padding-bottom: 0;
  .menu-item {
    .router {
      display: flex;
      justify-content: space-around;
      padding: 0.2rem;
      border-bottom: 1px solid #ccc;
      .msg-right {
        width: 5.3rem;
        height: 1.6rem;
        margin-left: 0.2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      .msg-title {
        font-size: 0.32rem;
        font-weight: 500;
        line-height: 1.6;
        // 单行文本，超出部分省略号
        // overflow: hidden;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .msg-time {
        font-size: 0.2rem;
        display: flex;
        justify-content: space-between;
        .span-left {
          width: 0.9rem;
          i {
            padding: 0.1rem;
          }
        }
      }
    }
    img {
      display: block;
      width: 1.6rem;
      height: 1.6rem;
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
.menu-loadmore{
  
  /deep/ .mint-loadmore-top{
    font-size: 0.36rem;
    color: skyblue;
  }
}
</style>