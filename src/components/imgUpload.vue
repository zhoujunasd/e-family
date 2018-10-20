<template>
  <div class="imgupdate">
    <label>
      <input type="file" :disabled='this.$store.state.readOnly' style="display: none" @change="upload">
      <img class="upimg" :src="value">
    </label>
    <!-- <canvas ref='canvas' style="display: none"></canvas> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "imgUpload",
  props: {
    value: [String]
  },
  data() {
    return {
      imgUrl: "",
      token: ""
    };
  },
  methods: {
    // getBase64Image(img) {
    //   let canvas = this.$refs.canvas
    //   canvas.width = img.width;
    //   canvas.height = img.height;
    //   let ctx = canvas.getContext("2d");
    //   ctx.drawImage(img, 0, 0, img.width, img.height);
    //   let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    //   let dataURL = canvas.toDataURL("image/" + ext);
    //   return dataURL;
    // },
    getToke() {
      axios.get("http://upload.yaojunrong.com/getToken").then(res => {
        this.token = res.data.data;
      });
    },
    upload() {
      let reader = new FileReader();
      let AllowImgFileSize = 2100000; //上传图片最大值(单位字节);
      let file = event.target.files[0];
      let imgUrlBase64;
      let _this = this
      if (file) {
        imgUrlBase64 = reader.readAsDataURL(file);
        reader.onload = function(e) {
          var ImgFileSize = reader.result.substring( reader.result.indexOf(",") + 1 ).length; //截取base64码部分（可选可不选，需要与后台沟通）
          if ( AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length ) {
            alert("上传失败，请上传不大于2M的图片！");
            return;
          } else {
            //执行上传操作
            let datastr = reader.result.substring(23, ImgFileSize)
            // console.log(reader.result);
            // console.log(datastr);
            // let formData = new FormData();
            // formData.append("myFile", datastr);
            _this.$axios.post('/image/uploadBase64.do',{myFile:datastr},{
              // headers: {
              //   "Content-Type": "x-www-form-urlencoded"
              // }
            }).then((res) => {
              console.log(res);
              _this.$store.commit('CHANGE_IMG',res.url)
            })
          }
        };
      }
    }
    // upload(event) {
    //   let file = event.target.files[0];
    //   let formData = new FormData();
    //   formData.append("file", file,file.name);
    //   formData.append("token", this.token);
    //   axios.post("https://upload-z1.qiniup.com", formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       }
    //     }).then(res => {
    //       // console.log(res);
    //       this.$emit("success", res.data.url);
    //     });
    // }
  },
  watch: {
    value(val) {
      this.imgUrl = val;
    }
  },
  created() {
    this.getToke();
  }
};
</script>

<style scoped lang='scss'>
.imgupdate {
  .upimg {
    display: block;
    width: 36px;
    height: 36px;
  }
}
</style>