<template>
    <div class="his-content">
        <div class="his-message" v-html="data"></div>
        <isLoading v-model="isloading" :icon='false'></isLoading>
    </div>
</template>

<script>
import axios from 'axios'
import cheerio from 'cheerio'
import getTody from '../utils/getTody'
import isLoading from "../../components/Loading";
    export default {
        name: 'historyTody',
        components:{ isLoading },
        data(){
            return{
                data:'',
                isloading: true,
            }
        },
        methods:{
            getData(){
                this.isloading = true
                // this.$axios.get('http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70505%2Findex.html').then((res) => {
                //     // console.log(res);
                //     // this.data = res
                //     let p = /<!--content-->/;
                //     let p1 = /<!--p1 end-->/;
                //     let datastr = p.exec(res);
                //     let datastr1 = p1.exec(res);
                //     // console.log(datastr);
                //     // console.log(datastr1);
                //     this.data = res.slice(datastr.index,datastr1.index)
                //     this.isloading = false
                // })
                let url = `http://211.67.177.56:8080/hhdj/proxy/proxy.do`
                let day = new Date().getDate() 
                let month = new Date().getMonth()+1
                day = day >= 10 ? "" + day : "0" + day
                month = month >= 10 ? "" + month : "0" + month
                axios.get(url, {params: {url: getTody(month, day)}}).then(res => {
                    // console.log(res);
                    const $ = cheerio.load(res.data)
                    this.data = $('.p1_02').html()
                    this.isloading = false
                })
            }
        },
        created(){
            this.getData()
        },
    }
    // http://211.67.177.56:8080/hhdj/proxy/proxy.do?url=http:%2F%2Fcpc.people.com.cn%2FGB%2F64162%2F64165%2F70486%2F70505%2Findex.html
</script>
<style scoped lang='scss'>
.his-message{
    font-size: 14px;
    // font-size: .28rem;
    padding: .2rem;
    line-height: 2;
}
</style>