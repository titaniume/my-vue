<template>
  <div class="border1">
     <h2>C 结点</h2>
     <ChildrenE/>
     <ChildrenF/>
  </div>
</template>
<script>
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  name: 'ChildrenC',
  components:{
    ChildrenE,
    ChildrenF
  },
  //若这里设置 provide A节点再次改变 这里也不会变
  // provide() {
  //   return {
  //     theme: {
  //       color: "green"
  //     }
  //   };
  // }
};
</script>
<style lang='scss' scoped>
</style>