<template>
  <mt-header fixed :title="title">
    <!-- <mt-button icon="back" slot="left" @click="$router.back()"></mt-button> -->
    <mt-button icon="back" slot="left" @click="backhandle" v-if='this.$route.path == "/updateInfo" || this.$route.path == "/userInfo"'></mt-button>
    <mt-button v-else icon="back" slot="left" @click="$router.back()"></mt-button>
    <mt-button @click="readonly" slot="right" v-if='$route.name == "userInfo" ||$route.name == "updateInfo"'>{{readonlytop? '编辑' : '保存'}}</mt-button>
  </mt-header>
</template>

<script>
import { mapState } from "vuex";
import { Button, Header, Toast } from "mint-ui";
export default {
  name: "headerTitle",
  data() {
    return {
      readonlytop: true
      // title: this.$route.meta.title,
    };
  },
  components: {
    Button,
    Header
  },
  methods: {
    backhandle() {
      // console.log(this.$route);
      if (this.$route.path == "/updateInfo") {
        this.$router.push("/userInfo");
      } else {
        this.$router.push("/user");
      }
    },
    readonly() {
      if (this.$store.state.readOnly) {
        this.$router.push("/updateInfo");
      } else {
        let formData = {
          username: this.$store.state.userData.username,
          hometown: this.$store.state.userData.hometown,
          address: this.$store.state.userData.address,
          nation: this.$store.state.userData.nation,
          wxNum: this.$store.state.userData.wxNum,
          qqNum: this.$store.state.userData.qqNum,
          sex: this.$store.state.userData.sex,
          education: this.$store.state.userData.education,
          jobRank: this.$store.state.userData.jobRank,
          salary: this.$store.state.userData.salary,
          joinPartyTime: this.$store.state.userData.joinPartyTime,
          lastPayTime: this.$store.state.userData.lastPayTime,
          partyStatus: this.$store.state.userData.partyStatus
        };
        this.$axios.post("/user/modifyInfo.do", formData).then(res => {
          // console.log(res);
          if (res.code == 1) {
            let instance = Toast({
              message: res.msg,
              iconClass: "iconfont icon-chenggong",
              position: "top",
              duration: 5000
            });
            setTimeout(() => {
              instance.close();
              this.$router.push('/user')
            }, 500);
          } else {
          }
        });
        this.$router.push("/userInfo");
      }
      this.$store.commit("CHANGE_READ");
    }
  },
  watch: {
    readOnly() {
      this.readonlytop = this.$store.state.readOnly;
    }
  },
  computed: {
    ...mapState(["readOnly"]),
    title() {
      return this.$route.meta.title;
    }
  },
  created() {}
};
</script>

<style lang='scss'>
.mint-header {
  height: 0.88rem !important;
  background: #c50206 !important;
  .mint-header-title {
    font-size: 0.36rem;
  }
  .mint-button-text {
    font-size: 16px;
  }
}
</style>