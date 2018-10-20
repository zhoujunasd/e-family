<template>
    <div class="interact-content" >
      <div infinite-scroll-disabled="loading" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
        <div class="inter-item" v-for="(item,index) in rows" :key='index'>
          <div class="inter-top">
            <div class="top-left">
              <img :src="item.header" alt="">
            </div>
            <div class="top-center">
              <div>{{item.username}}</div>
              <div>
                <div><i class="iconfont icon-date-2"></i>{{item.currentTime}}</div>
                <div><i class="iconfont icon-laba"></i>{{item.type == 1 ? '公开':'私密'}}</div>
              </div>
            </div>
            <div class="top-right">党员互动</div>
          </div>
          <div class="inter-center">{{item.content}}</div>
          <div class="inter-bottom"><i class="iconfont icon-huifu"></i>回复</div>
        </div>
      </div>
      <isLoading v-model="hasmeasage" :icon='true'></isLoading>
    </div>
</template>

<script>
import { MessageBox, Toast, InfiniteScroll } from 'mint-ui';
import isLoading from "../../components/Loading";
export default {
  name: "codeInteract",
  components:{ isLoading },
  data(){
    return{
      rows: [],
      page: 1,
      type: 0,
      cates: 0,
      hasmeasage: true,
      loading: true,
    }
  },
  methods: {
    getData(){
      this.$axios.get(`/forum/forumList.do?page=${this.page}&rows=10&type=${this.type}&cates=0`).then((res) => {
        console.log(res);
        if(res.code == 1){
          this.rows = this.rows.concat(res.rows)
          if(res.rows == 0){
            this.hasmeasage = false ;
            this.loading = true;
          }else{
            this.loading = false
          }
        }else{
          Toast({
            message: res.msg,
            iconClass: "iconfont icon-cuowu",
            position: "top",
            duration: 500
          });
        }
      }).catch((err) => {
        MessageBox('网络出错',"请检查网络链接！！！")
      })
    },
    loadMore(){
      this.page++;
      this.getData();
    },
  },
  created(){
    this.getData();
  },
};
</script>

<style scoped lang='scss'>
.interact-content{
  font-size: 16px;
  background: #ccc;
}
.inter-item{
  box-sizing: border-box;
  padding: 16px;
  background: #fff;
  .inter-top{
    display: flex;
    
  }
}
img{
  width: 40px;
  height: 40px;;
}
</style>