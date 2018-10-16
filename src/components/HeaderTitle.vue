<template>
    <mt-header fixed :title="title">
        <mt-button icon="back" slot="left" @click="$router.back()" ></mt-button>
    </mt-header>
</template>

<script>
import { Button, Header } from "mint-ui";
export default {
  name: "headerTitle",
  components: {
    Button, Header
  },
  computed: {
    title() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style lang='scss'>
.mint-header{
    height: 0.88rem !important;
    background:  #c50206 !important;
    .mint-header-title {
        font-size: 0.32rem
    }
}
</style>