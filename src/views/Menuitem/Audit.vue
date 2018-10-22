<template>
    <div class="audit-wrap">
        <div class="image-wrap">
            <img src="../../assets/imgs/reviewing.png" alt="">
            <div class="text">正在审核中</div>
        </div>
        <div class="btn-wrap">
            <mt-button @click="handleclick" type="danger" size="normal">关闭</mt-button>
        </div>
    </div>
</template>

<script>
import { Button } from "mint-ui";
    export default {
        name: 'audit',
        components:{Button},
        methods: {
            handleclick(){
                this.$router.back()
            }
            // user_id = token
            // 思想汇报接口get:report/reportInfo.do?user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA3Mjc5NzEyNDUsInVpZCI6MiwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1NDAxMjMxNzEyNDV9.s774yX9opwi8spoN1Ebc4h8bifUoUK-nzd0ETGiMvYk
            // 返回type:0
            // 心得总结get:/impress/checkByUserId.do?user_id=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHQiOjE1NDA3Mjc5NzEyNDUsInVpZCI6MiwicHdkIjoiZTEwYWRjMzk0OWJhNTlhYmJlNTZlMDU3ZjIwZjg4M2UiLCJpYXQiOjE1NDAxMjMxNzEyNDV9.s774yX9opwi8spoN1Ebc4h8bifUoUK-nzd0ETGiMvYk
            // 返回type:0
        }
    }
</script>

<style scoped lang='scss'>
.image-wrap{
    margin-top: 50px;
    text-align: center;
    img{
        width: 90px;
    }
    .text{
        font-size: 16px;
        height: 20px;
        text-align: center;
        margin: 4px 0;
    }
}
.btn-wrap{
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
    .mint-button{
        width: 60%;
    }
}
</style>