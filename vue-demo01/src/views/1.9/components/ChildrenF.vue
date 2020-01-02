<template>
  <div class="border2">
    <h3>F节点</h3>
    <a-button type="primary" @click="getARef" >获取A组件Ref</a-button>&nbsp;&nbsp;
    <a-button type="primary" @click="getHRef" >获取H组件Ref</a-button>
  </div>
</template>

<script>
export default {
  name:"ChildrenF",
  props: {
  },
  components: {},
  inject: {
    getParentRef: {
      from: "getRef",
      default: () => {}
    },
    getParentChildrenRef: {
      from: "getChildrenRef",
      default: () => {}
    }
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    getARef(){
      console.log(this.getParentRef());
    },
    getHRef(){
      console.log(this.getParentChildrenRef("childrenH"));
    }
  },
}
</script>
<style scoped>
</style>