<template>
  <div>
    <div class="wrap">
      <div class="logo-wrap">
        <img src="../../assets/imgs/logo.png" alt="">
      </div>
      <!-- enctype='multipart/form-data' 部分请求数据需要设置enctype格式 -->
      <form action="" class="form" @submit.prevent>
        <div class="input-wrap">
          <input type="text" v-model="formData.id_card" placeholder="身份证号">
        </div>
        <div class="input-wrap">
          <input type="password" v-model="formData.password" placeholder="密码">
        </div>
        <div class="input-wrap">
          <mt-button class="login-btn" @click="Logining" size='normal'>登录</mt-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Button, MessageBox, Toast } from "mint-ui";
export default {
  name: "Login",
  components: { Button },
  data() {
    return {
      formData: {
        id_card: 1001,
        password: 123456
      },
      token: "",
      userdata: {}
    };
  },
  methods: {
    Logining() {
      // axios请求数据模拟multipart/form-data格式=======================================!!!
      // 或者使用qs模块，在定义的axios内转义
      // let formData = new FormData();
      // formData.append("id_card", this.formData.id_card);
      // formData.append("password", this.formData.password);
      this.$axios
        .post("/user/userLogin.do", this.formData, {
          // axios设置请求头：application/json默认格式
          // headers: {
          //   'Content-Type': "multipart/form-data"
          //   'Content-Type': "application/x-www-form-urlencoded"
          // }
        })
        .then(res => {
          // console.log(res);
          if (res.code == 1) {
            this.userdata = res.data;
            this.token = res.token;
            this.$store.commit("GTE_INFO", res.data);
            this.$store.commit("GTE_TOKEN", res.token);
            // mint ui 的Toast的用法
            let instance = Toast({
              message: res.msg,
              // className: 'mttost',   //  ？？？
              iconClass: "iconfont icon-chenggong",
              position: "top",
              duration: 5000
            });
            setTimeout(() => {
              instance.close();
              // console.log(this.$route);z
              // console.log(this.$router);
              // console.log(typeof this.$route.query.redirect);
              if(typeof this.$route.query.redirect == 'undefined'){
                this.$router.push('/user')
              }else{
                  this.$router.replace(this.$route.query.redirect)
                // this.$router.push(this.$route.query.redirect)
              }
            }, 500);
          } else {
            MessageBox("错误", res.msg);
          }
        })
        .catch(err => {
          MessageBox("错误", err);
        });
    }
  }
};
</script>

<style scoped lang='scss'>
.wrap {
  position: absolute;
  top: 0.9rem;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #c50206;
  overflow-y: auto;
  margin: -1px 0;
  .logo-wrap {
    img {
      width: 4rem;
      margin: 0.6rem auto;
      display: block;
    }
  }
  .form {
    width: 6rem;
    margin: 0 auto;
    .input-wrap {
      width: 100%;
      input {
        width: 5.68rem;
        padding: 0.2rem 0.12rem;
        border: 1px solid #ff0;
        border-radius: 0.1rem;
        background: #c50206;
        font-size: 0.28rem;
        color: #fff;
      }
      input::-webkit-input-placeholder {
        color: #fff;
      }
      .login-btn {
        width: 6rem;
        background-color: #e3574e;
        color: #fff;
        font-size: 0.28rem;
      }
    }
  }
}
</style>