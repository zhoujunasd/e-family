<template>
    <div class="cost-content">
        <span>请选择支付方式</span>
        <div>
            <mt-cell title="微信" is-link @click.native="weixinclick">
                <img src="../../assets/imgs/微信.png" slot="icon" width="40" height="40">
            </mt-cell>
            <mt-cell title="支付宝" is-link @click.native="alipayclick">
                <img src="../../assets/imgs/支付宝.png" slot="icon" width="44" height="44">
            </mt-cell>
        </div>
        <div class="cost-alipay" v-if="alipay" @click="editcost">
            <div class="alipay-item">
                <div class="cost-title">支付宝支付</div>
                <img src="../../assets/imgs/alipay.png" alt="">
            </div>
        </div>
        <div class="cost-alipay" v-if='wechat' @click="editcost">
            <div class="alipay-item">
                <div class="cost-title">微信支付</div>
                <img src="../../assets/imgs/wechat.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import { Cell } from 'mint-ui';
export default {
  name: "partyCost",
  components:{Cell},
  data(){
      return{
          alipay: false,
          wechat: false,
      }
  },
  methods:{
      weixinclick(){
        this.wechat = true
      },
      alipayclick(){
          this.alipay = true
      },
      editcost(){
          this.alipay = false;
          this.wechat = false
      }
  },
};
</script>

<style scoped lang='scss'>
.cost-content{
    font-size: 16px;
    span{
        font-weight: 700;
        display: block;
        padding: 20px 0 10px 0;
    }
    .mint-cell{
        height: 62px;
        line-height: 62px;
        border: 1px solid #ccc;
        margin: -1px;
        color: #444;
    }
    /deep/ .mint-cell-wrapper{
        height: 62px;
    }
}
.cost-alipay{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background: rgba(0,0,0,.6);
    .alipay-item{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .cost-title{
        width: 300px;
        font-size: 20px;
        line-height: 2;
        text-align: center;
        background-color: #fff;
        margin-bottom: -1px;
    }
    img{
        width: 300px;
        height: 300px;
    }
}
</style>