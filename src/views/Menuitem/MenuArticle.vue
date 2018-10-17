<template>
  <div class="article">
    <h5 class="msg-title">{{title}}</h5>
    <div class="msg-content" v-html="content"></div>
    <isLoading v-model="isloading" :icon='false'></isLoading>
  </div>
</template>

<script>
import isLoading from "../../components/Loading";
import { MessageBox, } from "mint-ui";
export default {
  name: "menuArticle",
  components:{ isLoading, },
  data() {
    return {
      title: "",
      // pic: '',
      content: "",
      isloading: true
    };
  },
  methods: {
    getTitle() {
      // console.log(this.$router);
      // console.log(this.$route);
      this.$route.meta.title = localStorage.getItem("meta_title");
    },
    getData() {
      this.isloading = true
      this.$axios.get(`/news/newsContent.do?newsId=${this.$route.params.id}`)
        .then(res => {
          //   console.log(res);
          if (res.code == 1) {
            this.isloading = false
            this.title = res.data.title;
            this.content = res.data.content;
          }
        });
    }
  },
  created() {
    this.getTitle();
    this.getData();
  },
  beforeDestroy() {
    localStorage.removeItem("meta_title");
  }
};
</script>

<style scoped lang='scss'>
.article {
  padding: 0.2rem;
  .msg-title {
    font-size: 0.48rem;
    margin-bottom: 0.2rem;
  }
  .msg-content {
    /deep/ img {
      width: 100%;
    }
    width: 100%;
    font-size: 0.22rem;
    line-height: 1.5;
  }
}
</style>