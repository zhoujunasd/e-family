<template>
    <div>
        <div class="wrap">
            <div class="logo-wrap">
                <img src="../../assets/imgs/logo.png" alt="">
            </div>
            <form class="form" @submit.prevent>
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
import { Button,MessageBox } from "mint-ui";
export default {
  name: "Login",
  components: { Button },
  data() {
    return {
      formData: {
        id_card: "",
        password: ""
      }
    };
  },
  methods:{
    Logining(){
      this.$axios.post('/user/userLogin.do',this.formData,{
          'Content-Type':'application/x-www-form-urlencoded'
      }).then((res) => {
        console.log(res);
        if(res.code == 1){

        }else{
          MessageBox('错误',res.msg)
        }
      }).catch((err) => {
        MessageBox('错误',res.msg)
      })
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