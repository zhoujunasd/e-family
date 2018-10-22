<template>
    <div class="person-wrap">
        <div class="img-content">
            <div class="imgs-wrap" v-for='(item,index) in imgs' :key='index'>
                <div class="upload-wrap">
                    <img class="upimg" :src="item.url" alt="">
                </div>
            </div>
            <label class="upload-wrap">
                <input type="file" style="display: none" @change="upload">
                <img class="upimg" src="../../assets/imgs/upload.png">
            </label>
        </div>
        <!-- <div class="upload-wrap">
            <input type="file" style="display: none">
            <img class="upimg" src="../../assets/imgs/upload.png">
        </div> -->
        <div class="button-wrap">
            <mt-button  @click="handleclick" type="danger" size="normal">提交审核</mt-button>
        </div>
    </div>
</template>

<script>
import { Toast, Button, MessageBox } from "mint-ui";
export default {
  name: "personalsummary",
  components: {},
  data() {
    return {
      imgs: [],
      img_list: ""
    };
  },
  methods: {
    handleclick() {
      this.$axios
        .post("/nationComment/submitSummary.do", {
          pic_list: this.img_list,
          comment_id: 0,
          user_id: this.$store.state.token
        })
        .then(res => {
          if (res.code == 1) {
            this.$router.push("/handlive");
          } else {
            Toast({
              message: res.msg,
              position: "top",
              duration: 500
            });
          }
        })
        .catch(err => {
          MessageBox("网络错误", "请检查网络链接！");
        });
    },
    upload() {
      let file = event.target.files[0];
      let reader = new FileReader();
      let imgUrlBase64;
      let _this = this;
      if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function(e) {
          var ImgFileSize = reader.result.substring(
            reader.result.indexOf(",") + 1
          ).length;
          let datastr = reader.result.substring(23, ImgFileSize);
          _this.$axios
            .post("/image/uploadBase64.do", { myFile: datastr })
            .then(res => {
              // console.log(res);
              if (res.error == 200) {
                _this.img_list = _this.img_list + res.url + ",";
                let obj = {};
                obj.url = reader.result;
                _this.imgs.push(obj);
                // console.log(_this.imgs);
              } else {
                Toast({
                  message: res.msg,
                  position: "top",
                  duration: 500
                });
              }
            });
        };
      }
    }
  }
};
</script>

<style scoped lang='scss'>
.img-content{
    overflow-y: scroll; 
    height: 10rem;
}
.button-wrap{
    position: fixed;
    width: 4rem;
    bottom: 1.6rem;
    left: 0;
    right: 0;
    margin: 0 auto;
    button{
        width: 100%;
    }
}
.imgs-wrap {
  display: inline-block;
}
.img-item {
  box-sizing: border-box;
  width: 125px;
}
.upload-wrap {
  display: inline-block;
  box-sizing: border-box;
  width: 125px;
  height: 125px;
  padding: 10px;
  img {
    width: 105px;
    height: 105px;
  }
}
</style>