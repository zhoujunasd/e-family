<template>
    <div class="mem-wrap" infinite-scroll-disabled="loading" v-infinite-scroll="loadBottom" infinite-scroll-distance="10">
        <div v-for="(item,index) in rows" :key='index'>
            <div class="item-wrap">
                <!-- 当图片错误时，显示默认图片 -->
                <img onerror='this.src="http://oowantxlb.bkt.clouddn.com/upload/front/4470566e228087f9f66ef039be58cbe9.png"' :src="item.header" alt="">
                {{item.username}}
                <span class="span-wrap flr">{{item.branchName}}</span>
            </div>
        </div>
        <isLoading v-model="hasmeaasge" :icon='true'></isLoading>
    </div>
</template>

<script>
import { Toast, Button, MessageBox,InfiniteScroll } from "mint-ui";
import isLoading from "../../components/Loading";
export default {
  name: "members",
  components:{ isLoading },
  data() {
    return {
      page: 1,
      rows: [],
      loading: true,
      hasmeaasge: true,
    };
  },
  methods: {
    loadBottom(){
        this.page++
        this.loading = true
        this.getData()
    },
    getData() {
      this.$axios
        .get(
          `/nationComment/userList.do?select_branch=${
            this.$route.params.id
          }&user_id=${this.$store.state.token}&page=${this.page}&rows=10`
        )
        .then(res => {
          console.log(res);
          if (res.code == 1) {
            // this.rows = res.rows;
            this.rows = this.rows.concat(res.rows)
            if(res.rows.length == 0){
                this.loading = true
                this.hasmeaasge = false
            }else{
                this.loading = false
            }   

          } else {
            Toast({
              message: res.msg,
              position: "top",
              duration: 500
            });
          }
        })
        .catch(err => {
          MessageBox("错误", "请检查网络链接！！！");
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.mem-wrap {
  font-size: 16px;

  .item-wrap {
    width: 100%;
    box-sizing: border-box;
    margin: -1px;
    padding: 16px 54px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #444;
    position: relative;
    .span-wrap {
      position: absolute;
      right: 11px;
      font-size: 14px;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 11px;
    width: 0.64rem;
    height: 0.64rem;
    padding: 10px 0px;
    border-radius: 50%;
  }
}
</style>