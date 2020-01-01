<template>
  <div class="border2">
    <h3 :style="{color:theme1.color}">F 节点</h3>
  </div>
</template>
<script>
export default {
  name: 'ChildrenF',
   //inject 方式注入theme theme1是别名 通过from方式知道哪个属性
  inject:{
    theme1:{
      from: "theme",
      default: () => ({})
    }
  },
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
</style>