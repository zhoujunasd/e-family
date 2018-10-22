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
            <!-- <div class="inter-top">
                <div class="inter-msg">
                    <img :src="row.header" alt="">
                    <div class="msg-title">
                        <div>{{row.username}}</div>
                        <div class="msg-data"><i class="iconfont icon-date-2"></i>{{row.currentTime}}</div>
                    </div>
                </div>
                <div class="inter-content">{{row.content}}</div>
            </div> -->
            <div  class="pinglun-wrap" infinite-scroll-disabled="loading" v-infinite-scroll="loadMore" infinite-scroll-distance="10">
                <div  v-for="(item,index) in rows" :key='index'>
                <div class="inter-top">
                    <div class="inter-msg">
                        <img :src="item.header" alt="">
                        <div class="msg-title">
                            <div>{{item.username}}</div>
                            <div class="msg-data"><i class="iconfont icon-date-2"></i>{{item.timeFormat}}</div>
                        </div>
                    </div>
                    <div class="inter-content">{{item.comment}}</div>
                </div>
            </div>
            <isLoading v-model="hasmeasage" :icon='true'></isLoading>
            </div >

        </div>
        <div class="pinglun">
            <label class="input-wrap">
                <!-- ref='inputtext' -->
                <input v-model="inter_content"  @keyup.enter="handelclick" type="text">
            </label>
            <div class="btn-wrap">
                <button class="pinglun-btn"  @click="handelclick">评论</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState  } from "vuex";
import { MessageBox, Toast, InfiniteScroll } from "mint-ui";
import isLoading from "../../components/Loading";
export default {
  name: "interactionDetail",
  components:{isLoading},
  data() {
    return {
      forum_id: this.$store.state.row.forumId,
      rows: [],
      hasmeasage: true,
      inter_content: '',
      page: 1,
      loading: true,
    };
  },
  methods: {
      handelclick(){
          this.$axios.post('/forum/addComment.do',{forum_id: this.forum_id,comment: this.inter_content}).then((res) => {
            //   console.log(res);
                if(res.code == 1){
                    Toast({
                        message: res.msg,
                        position: "top",
                        duration: 500
                    })
                    // this.$refs.inputtext.value = ''
                    this.inter_content = ''
                    setTimeout(()=>{
                        this.rows=[];this.page=1;this.getData()
                    },100)
                }else{
                    Toast({
                        message: res.msg,
                        position: "top",
                        duration: 500
                    })
                }
          }).catch((err) => {
               MessageBox("网络错误", "请检查网络链接！！！");
          })
      },
      loadMore(){
          this.page++
          this.getData()
          this.loading = true
      },
    getData() {
      this.$axios
        .get(`/forum/forumCommentList.do?page=${this.page}&rows=10&forum_id=${this.$store.state.row.forumId}`)
        .then(res => {
        //   console.log(res);
            if(res.code == 1){
                // this.rows = res.rows
                this.rows.push.apply(this.rows,res.rows)
                if(res.rows.length == 0){
                    this.hasmeasage = false
                    this.loading = true
                }else{
                    this.loading = false
                }
            }
        })
        .catch(err => {});
    }
  },
  computed: {
    ...mapState(["row"]),
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
.pinglun-wrap{
    overflow-y: scroll;
    height: 450px;
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
    margin: -1px;
    margin-bottom: 10px;
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
        // height: 30px;
        font-size: 14px;
        line-height: 1.5;
        padding: 10px 0;
        // display: -webkit-box;
        // -webkit-box-orient: vertical;
        // -webkit-line-clamp: 2;
        // overflow: hidden;
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