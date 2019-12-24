<template>
  <div class="border">
       <a-button type="primary" @click="init = !init">移动</a-button>
    <div v-if="init">
      <ChildrenB />
      <ChildrenC> </ChildrenC>
      <ChildrenD />
    </div>
    <div v-else>
      <ChildrenC></ChildrenC> 
      <ChildrenD />
      <ChildrenB />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  name: 'ChildrenA1',
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  data() {
    return {
      init:true
    };
  }
};
</script>
<style lang='scss' scoped>
</style>