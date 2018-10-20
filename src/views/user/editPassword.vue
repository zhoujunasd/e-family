<template>
    <div class="edit-pass">
        <form ref='form' action="" class="form" @submit.prevent>
            <div class="form-item">
                旧密码：
                <input type="password" v-model="formData.oldPaw">
            </div>
            <div class="form-item">
                新密码：
                <input type="password" v-model="formData.newPaw">
            </div>
            <div class="form-item">
                确认密码：
                <input type="password" v-model="textPaw">
            </div>
            <div>
                <mt-button @click="handleedit" type="danger" size='normal'>确定</mt-button>
            </div>
        </form>
    </div>
</template>

<script>
import { MessageBox, Toast, Button,Indicator } from "mint-ui";
export default {
  name: "editPassword",
  components:{Button},
  data() {
    return {
      formData: {
        newPaw: "",
        oldPaw: ""
      },
      textPaw:'',
    };
  },
  methods: {
    editpass() {
      this.$axios.get(`user/updatePwd.do?newPwd=${this.formData.newPaw}&oldPwd=${this.formData.oldPaw}`).then(res => {
          console.log(res);
        //   setTimeout(()=>{Indicator.close()},100)
          Indicator.close()
          if (res.code == 1) {
            Toast({
              message: res.msg,
              iconClass: "iconfont icon-chenggong",
              position: "top",
              duration: 500
            });
            setTimeout(()=>{this.$router.push('/user')},500)
          }else{
              MessageBox("错误",res.msg)
          }
        }).catch(err => {
          MessageBox("网络错误", "请检查网络链接！！！");
        });
    },
    handleedit(){
        // console.dir(this.$refs.form[1]);
        // console.dir(this.$refs.form[2]);
        if(this.$refs.form[1].value == '' || this.$refs.form[0].value == '' || this.$refs.form[2].value == ''){
            Toast({
              message: "请输入密码！！！",
              iconClass: "iconfont icon-cuowu",
              position: "top",
              duration: 1000,
            });
        }else if(this.$refs.form[1].value != this.$refs.form[2].value){
            Toast({
              message: "两次密码不一样！！！",
              iconClass: "iconfont icon-cuowu",
              position: "top",
              duration: 1000,
            });
        }else{
            Indicator.open({spinnerType: 'double-bounce'});
            this.editpass()
        }
    },
  },
};
</script>

<style scoped lang='scss'>
.edit-pass {
  font-size: 16px;
  color: #666;
  margin-top: 50px;
  .form {
    width: 6rem;
    margin: 0 auto;
    box-sizing: border-box;
    .form-item {
      display: flex;
      flex-direction: column;
      input{
          height: .8rem;
          border: 1px solid #999!important;
          color: #666!important;
          margin: 0 10px;
          border-radius: 5px;
          padding: 0 5px;
          margin: 10px 0;
      }
    }
  }
}
.mint-button{
    width: 100%;
}
input:focus{
    // 去掉input框，获取焦点时的边框，============================
   outline:none;
//    border: 1px solid #ccc!important;
}
</style>