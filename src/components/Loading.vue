<template>
    <div class="no-message" >
      <Spinner class="spinner" v-if='hasMeaasge' type="snake" color="#26a2ff"></Spinner>
      <div v-show="icon" v-else>没有数据了</div>
    </div>
</template>

<script>
import { Spinner } from "mint-ui";
    export default {
        name:'isLoading',
        components:{Spinner },
        data(){
            return{
                hasMeaasge: true,
            }
        },
        props:{
            value:[Boolean],
            icon:[Boolean]
        },
        watch:{
            value(){
                this.hasMeaasge = this.value
            }
        }
    }
</script>

<style scoped lang='scss'>
.no-message {
  text-align: center;
  padding: 0.2rem 0;
  color: #666;
  font-size: 0.28rem;
  .spinner {
    display: inline-block;
    text-align: center;
  }
}
</style>