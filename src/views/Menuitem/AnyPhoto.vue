<template>
    <div class="any-photo">
        <div class="photo-menu" v-for='(item,index) in rows' :key='index'>
            <router-link :to="{name:'men_art', params: {id: item.newsId}}" class="photo-item ">
                <img :src="item.pic" alt="">
                <div class="photo-title">{{item.title}}</div>
            </router-link>
        </div>
        <!-- <isLoading v-model="isloading" :icon='true'></isLoading> -->
    </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import isLoading from "../../components/Loading";
export default {
  name: "anyPhoto",
  components: { isLoading },
  data() {
    return {
      rows: [],
      page: 1,
      isloading: true
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(`/news/newsList.do?page=${this.page}&rows=10&type=7`)
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            // this.rows = res.rows
            this.rows = this.rows.concat(res.rows);
            // console.log(this.rows);11
            if (res.rows != "") {
              this.page++;
              this.getData();
            } else {
              this.isloading = false;
            }
          } else {
            MessageBox("消息", "数据请求失败！！！");
          }
        })
        .catch(err => {
          MessageBox("数据请求失败", "请检查网络连接是否成功！！！");
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.any-photo {
  .photo-menu {
    width: 50%;
    padding: 0.32rem;
    box-sizing: border-box;
    display: inline-block;
    .photo-item {
      img {
        width: 100%;
        height: 2.4rem;
        display: block;
      }
      .photo-title {
        height: 0.72rem;
        box-sizing: border-box;
        color: #666;
        font-size: 0.26rem;
        line-height: 1.5;
        white-space: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>