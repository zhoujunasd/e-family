<template>
    <div class="article">
        <h5 class="msg-title">{{title}}</h5>
        <div class="msg-content" v-html="content"></div>
    </div>
</template>

<script>
export default {
  name: "menuArticle",
  data() {
    return {
      title: "",
      // pic: '',
      content: "",
    };
  },
  methods: {
      getTitle(){
        // console.log(this.$router);
        // console.log(this.$route);
        this.$route.meta.title = localStorage.getItem('meta_title')
         
      },
    getData() {
      this.$axios
        .get(`/news/newsContent.do?newsId=${this.$route.params.id}`).then(res => {
        //   console.log(res);
          if (res.code == 1) {
            this.title = res.data.title;
            this.content = res.data.content;
          }
        });
    }
  },
  created() {
    this.getTitle()
    this.getData();
  },
  beforeDestroy(){
      localStorage.removeItem("meta_title");
  }
};
</script>

<style scoped lang='scss'>
.article {
  padding: 0.2rem;
  .msg-title {
    font-size: 0.48rem;
    margin-bottom: .2rem;;
  }
  .msg-content {
      /deep/ img{
          width: 100%;
      }
    width: 100%;
    font-size: 0.22rem;
    line-height: 1.5;
  }
}
</style>