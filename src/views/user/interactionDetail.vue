<template>
    <div class="inter-wrap">
        <div class="content-wrap">
            <div class="inter-top">
                <div class="inter-msg">
                    <img :src="row.header" alt="">
                    <div class="msg-title">
                        <div>{{row.username}}</div>
                        <div class="msg-data"><i class="iconfont icon-date-2"></i>{{row.currentTime}}</div>
                    </div>
                </div>
                <div class="inter-content">{{row.content}}</div>
            </div>

            <div class="pinglun-wrap">
                <div class="inter-top">
                    <div class="inter-msg">
                        <img :src="row.header" alt="">
                        <div class="msg-title">
                            <div>{{row.username}}</div>
                            <div class="msg-data"><i class="iconfont icon-date-2"></i>{{row.currentTime}}</div>
                        </div>
                    </div>
                    <div class="inter-content">{{row.content}}</div>
                </div>
            </div>

            <isLoading v-model="hasmeasage" :icon='true'></isLoading>
        </div>
        <div class="pinglun">
            <label class="input-wrap">
                <input v-model="inter_content" type="text">
            </label>
            <div class="btn-wrap">
                <button class="pinglun-btn" @click="handelclick">评论</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import isLoading from "../../components/Loading";
export default {
  name: "interactionDetail",
  components:{isLoading},
  data() {
    return {
      forum_id: "",
      rows: [],
      hasmeasage: true,
      inter_content: ''
    };
  },
  methods: {
      handelclick(){

      },
    getData() {
      this.$axios
        .get(
          `/forum/forumCommentList.do?page=1&rows=10&forum_id=${
            this.$store.state.row.forumId
          }`
        )
        .then(res => {
          console.log(res);
            if(res.code == 1){
                if(res.rows == ''){
                    this.hasmeasage = false
                }
            }
        })
        .catch(err => {});
    }
  },
  computed: {
    ...mapState(["row"])
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang='scss'>
.content-wrap {
  padding: 10px;
  position: fixed;
  top: 45px;
  bottom: 50px;
  left: 0;
  right: 0;
  background-color: #efeff4;
}
.inter-wrap {
  box-sizing: border-box;
  font-size: 16px;
  background-color: #efeff4;
  .inter-top {
    box-sizing: border-box;
    padding: 16px;
    background-color: #fff;
    color: #444;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    margin: -1px;
    .inter-msg {
      display: flex;
      img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
      .msg-title {
        font-size: 18px;
        color: #333;
        padding-left: 10px;
      }
      .msg-data {
        font-size: 12px;
        align-items: center;
        i{
            padding: 0 5px;
        }
      }
    }
    .inter-content{
        height: 20px;
        line-height: 20px;
        padding: 10px 0;
    }
  }
}
.pinglun{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    line-height: 50px;
    display: flex;
    box-sizing: border-box;
    padding:8px;
    .input-wrap{
        border: 1px solid #c50206;
        border-radius: 4px;
        width: 6rem;
        input{
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            border: none;
            padding:  0 8px;
            float: left;
            border-radius: 4px;
        }
    }
    .btn-wrap{
        border-radius: 4px;
        margin: 0 8px;
        button{
            float: left;
            height: 100%;
            width: 100%;
            color: #fff;
            background-color: #c50206;;
            border-radius: 4px;
            padding: 0 4px;
        }
    }   
}
input:focus{
    outline:none;
}
button:focus{
    outline:none;
}
</style>