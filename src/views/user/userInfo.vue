<template>
  <div class="userInfo">
    <!-- <div class="info-item">
            <mt-cell title="头像"><img :src="userData.header" width="36" height="36"></mt-cell>
            带链接
            <mt-cell to="/" is-link title="姓名" :value="userData.username"></mt-cell>
            带图标
            自定义图标<img slot="icon" src="../assets/100x100.png" width="24" height="24">
            <mt-cell icon="more" title="身份证" :value="userData.idCard"></mt-cell>
            带有备注信息
            <mt-cell label="描述信息" title="家庭住址" :value="userData.hometown"></mt-cell>
            <mt-cell title="工作住址" :value="userData.address"></mt-cell>
            <mt-cell title="民族" :value="userData.nation"></mt-cell>
            <mt-cell title="微信号" :value="userData.wxNum"></mt-cell>
            <mt-cell title="QQ号" :value="userData.qqNum"></mt-cell>
            <mt-cell title="性别" :value="userData.sex">{{userData.sex == 1 ? '男': '女'}}</mt-cell>
            <mt-cell title="最高学历" :value="userData.education"></mt-cell>
            <mt-cell title="职称" :value="userData.jobRank"></mt-cell>
            <mt-cell title="薪资水平" :value="userData.salary"></mt-cell>
            <mt-cell title="入党时间" :value="userData.joinPartyTime"></mt-cell>
            <mt-cell title="党费最后缴纳" :value="userData.lastPayTime"></mt-cell>
            <mt-cell title="当前身份" :value="userData.partyStatus" ></mt-cell>
            <mt-cell title="当前身份">{{userData.partyStatus == 1 ? '预备党员': '正式党员'}}</mt-cell>
        </div> -->
    <div class="edit-info">
      <!-- :disabled='disable' -->
      <mt-field label="头像" disableClear>
        <!-- <img :src="userInfo.header" width="36" height="36"> -->
        <!-- :imgheader='userInfo.header' -->
        <ImgUpload class="imgupload" @success='uploadimg' v-model="userInfo.header"></ImgUpload>
      </mt-field>
      <mt-field label="姓名" disableClear :readonly='readonly' v-model="userInfo.username"></mt-field>
      <mt-field label="身份证" disableClear readonly v-model="userInfo.idCard"></mt-field>
      <mt-field label="描述信息" disableClear :readonly='readonly' v-model="userInfo.hometown"></mt-field>
      <mt-field label="工作住址" disableClear :readonly='readonly' v-model="userInfo.address"></mt-field>
      <mt-field label="民族" disableClear :readonly='readonly' v-model="userInfo.nation"></mt-field>
      <mt-field label="微信号" disableClear :readonly='readonly' v-model="userInfo.wxNum"></mt-field>
      <mt-field label="QQ号" type="number" disableClear :readonly='readonly' v-model="userInfo.qqNum"></mt-field>
      <mt-field label="性别" disableClear>
        <div v-if="this.$store.state.readOnly">
          {{ userInfo.sex == 1 ? '男': '女'}}
        </div>
        <div v-else>
          <input type="radio" value=1 v-model="userInfo.sex" name="sex">男
          <input type="radio" value=0 v-model="userInfo.sex" name="sex">女
        </div>
      </mt-field>
      <!-- {{userData.sex == 1 ? '男': '女'}} -->
      <mt-field label="最高学历" disableClear :readonly='readonly' v-model="userInfo.education"></mt-field>
      <mt-field label="职称" disableClear :readonly='readonly' v-model="userInfo.jobRank"></mt-field>
      <mt-field label="薪资水平" disableClear :readonly='readonly' v-model="userInfo.salary"></mt-field>
      <mt-field label="入党时间" type="date" disableClear :readonly='readonly' v-model="userInfo.joinPartyTime"></mt-field>
      <mt-field label="党费最后缴纳" type="date" disableClear :readonly='readonly' v-model="userInfo.lastPayTime"></mt-field>
      <mt-field label="当前身份" disableClear >
        <select class="selectparty" :disabled='readonly' v-model="userInfo.partyStatus">
          <option value="0">党员</option>
          <option value="1">积极分子</option>
          <option value="2">预备党员</option>
        </select>
      </mt-field>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Cell, Field, Radio } from "mint-ui";
import ImgUpload from "../../components/imgUpload";
export default {
  name: "userInfo",
  components: { Cell, Field, ImgUpload, Radio },
  data() {
    return {
      //   disable: true,
      readonly: true,
      userInfo: this.$store.state.userData
    };
  },
  methods: {
    uploadimg(url) {
      this.userInfo.header = url;
    }
  },
  watch: {
    readOnly() {
      this.readonly = this.$store.state.readOnly;
    }
  },
  computed: {
    ...mapState(["userData", "readOnly"])
  }
};
</script>

<style scoped lang='scss'>
.imgupload {
  height: 36px;
  width: 36px;
}
.userInfo {
  /deep/ .mint-cell-wrapper {
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    img {
      border-radius: 50%;
    }
  }
}
.mint-field {
  .mint-cell-value {
    .mint-field-core {
      input {
      }
    }
  }
}

/deep/ input {
  text-align: right;
}
// /deep/ input:disabled {
//   background: #fff;
//   border: none;
// }
/deep/ select:disabled{
  border: none;
  appearance: none; /* 去掉默认图标 */
}
</style>