<template>
    <div >
        <div class="content-ponit" infinite-scroll-disabled="loading" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
            <div class="point-item" v-for='(item,index) in rows' :key='index'>
                <div class="point-left">
                    <div class="point-title">{{item.typeName}}</div>
                    <div>{{item.timeFormat}}</div>
                </div>
                <div class="point-right">+{{item.singleDesc}}</div>
            </div>
        </div>
        <isLoading v-model="hasmeasage" :icon='true'></isLoading>
    </div>
</template>

<script>
import { MessageBox, Toast, InfiniteScroll } from "mint-ui";
import isLoading from "../../components/Loading";
export default {
  name: "pointDetail",
  components: {  isLoading },
  data() {
    return {
      rows: [],
      page: 1,
      hasmeasage: true,
      loading: true,
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(`/integral/integralList.do?page=${this.page}&rows=10`).then(res => {
          console.log(res);
          if (res.code == 1) {
              this.rows = this.rows.concat(res.rows)
              if(res.rows == ''){
                    this.hasmeasage = false
                    this.loading = true
              }else{
                  this.loading = false
              }
          } else {
            Toast({
              message: res.msg,
              iconClass: "iconfont icon-cuowu-copy",
              position: "top",
              duration: 1000
            });
          }
        })
        .catch(err => {
          MessageBox("错误", "网络请求出错，请检查网络");
        });
    },
    loadMore(){
        this.page++
        this.getData()
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.point-item{
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #eee;
    margin: -1px; 
    padding: 16px;
    height: 45px;
    .point-left{
        font-size: 14px;
        .point-title{
            display: block;
            font-size: 18px;
            margin-bottom: 5px;
            color: #333;
        }
    }
    .point-right{
        color: red;
        font-weight: 400;
    }
}   
</style>