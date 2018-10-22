<template>
    <div class="dis-wrap">  
        <div class="msg-wrap">
            <div class="msg-title">评议须知</div>
            <div class="msg" v-html='msg.content'></div>
        </div>
        <div class="bottom-wrap">
            <select v-model="rows_id" @change="getSelected">
                <option value="" disabled>请选择</option>
                <option v-for='(item) in rows' :key='item.id' :value="item.id">{{item.branch}}</option>
            </select>
            <mt-button @click="xiayibu" type="danger" size="normal">下一步</mt-button>
        </div>
    </div>
</template>

<script>
// content: "<p>在党支部专题组织生活会上，每一位党员要对照评议内容进行个人总结，查摆存在的问题，进行批评与自我批评，明确下一步的努力方向。在此基础上，党支部组织全体党员对每一位党员进行民主评议。评议主要内容如下：</p><p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p><p>2、参加“两学一做”学习教育情况；</p><p>3、参加党的组织生活、按要求交纳党费；</p><p>4、学习情况、业务能力提高情况；</p><p>5、关心集体、团结同志，发挥先锋模范作用情况；</p><p>6、联系群众、关心群众、服务群众情况；</p><p>7、遵守党章党规、法律法规和学校规章制度情况。</p>"
// createTime: 1497006296000
// id: "CEBBD1A4FF2147C8B9ED0CEA6AE90BCF"
// isOpen: 1
// timeFormat: null
// titleDesc: "民主评议"
import { Toast, Button, MessageBox } from "mint-ui";
    export default {
        name: 'discuss',
        data(){
            return{
                rows: [],
                msg: {},
                id: '',
                rows_id: '',
            }
        },
        methods: {
            getSelected(){

            },
            xiayibu(){
                this.$router.push({name:'members',params:{id:this.rows_id}})
                // this.$router.push('/members')
            },
            getDaTa(){
                this.$axios.get('/nationComment/getComment.do').then(res => {
                    this.msg = res
                }).catch(err => {
                    MessageBox('错误','请检查网络！！！')
                })
                this.$axios.get('/branch/findAll.do').then(res => {
                    if(res.code == 1){
                        this.rows = res.rows
                    }else{
                        Toast({
                            message: res.msg,
                            position: "top",
                            duration: 500
                        });
                    }
                }).catch(err => {
                    MessageBox('错误','请检查网络！！！')
                })
            }
        },
        created(){
            this.getDaTa()
        },
    }
</script>

<style scoped lang='scss'>
.bottom-wrap{
    text-align: center;
    select{
        border: 1px solid transparent;
        background: #c50206;
        color: #fff;
        border-radius: 5px;
        outline: none;
        text-align: center;
        margin: 0 20px;
        width: 180px;
        height: 40px;
    }
}
option::-ms-expand{ display: none; }
option{
    // 轮廓线
    outline: none;
    // appearance: normal|icon|window|button|menu|field;
    appearance: none;
    -webkit-appearance:none; /* Safari 和 Chrome */
    border: none;
    background-color: #fff;
    color: #000;
}
.dis-wrap{
    font-size: 16px;
}
.msg-wrap{
    margin-top: 5%;
    .msg-title{
        margin-bottom: 10px;
        text-align: center;
        font-weight: 600;
    }
    .msg{
        margin: 10px;
        font-size: 14px;
        line-height: 2;
        color: #666;
    }
}
</style>