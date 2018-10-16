<template>
    <div class="message-fade">
        <div
            :class="[
                'message-wrap',
                type && !iconClass ? `meaasge-${type}` : '',
                customClass,
                ]"
            @mouseleave.native="startTimer"
            v-show="visible">
            <!-- @mouseenter.native="clearTimer"
            @mouseleave.native="startTimer"
            role="alert" role属性为提高可读性，如提示，语音等-->
        <i :class="iconClass" v-if='iconClass'></i>
        <i :class="typeClass" v-else></i>
        <slot>
            <p :class='message__content'>{{message}}</p>
        </slot>
        </div>
    </div>
</template>

<script>
    const typeMap = {
        info: 'info',
        error: 'error'
    }
    export default {
        name: 'message',
        props(){
            // value: {
            //     type: [String]
            // }
            // message: String
        },
        data(){
            return{
                visible: false,
                message:"",
                type: 'info',
                iconClass: "",
                timer: null,
                closed: false,
                onclose: null
            }
        },
        computed:{
            typeClass(){
                return this.type && !this.iconClass
                    ? `message_icon` : '';
            }
        },
        watch:{
            closed(newVal) {
                if(newVal){
                    this.visible = false;
                    this.$el.addEventListener('transitionend',this.destroyElement);//transitionend 事件在 CSS 完成过渡后触发
                }
            }
        },
        methods:{
            destroyeElement() {
                this.$el.removeEventListener('transitionend',this.destroyElement)
                this.$destroy(true)
                this.$el.parentNode.removeChild(this.$el)
            },
            close() {
                this.closed = true;
                // if ( typeof this.onclose === 'function'){
                //     this.onclose(this)
                // }
            },
            clearTimer() {

            },
            startTimer() {
                this.timer = setTimeout(() => {
                    this.close()
                },3000)
            },
            keydown(){
                
            }
        },
        mounted() {
            this.startTimer();
            // document.addEventListener('keydown',this.keydown)
        },
        created(){
            this.$el.body.appendChild(this.body)
            this.visible = true;
        },
        beforeDestroy() {
            // document.removeEventListener('keydown',this.keydown)
        },
    }
</script>

<style scoped lang='scss'>

</style>