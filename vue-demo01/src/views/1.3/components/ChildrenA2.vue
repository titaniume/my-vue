<template>
  <div class="border1">
     <a-button type="primary" @click="init = !init">删除CEF，新建CEF动</a-button>
     <div v-if="init">
      <ChildrenB />
      <ChildrenC>
        <ChildrenE />
        <ChildrenF />
      </ChildrenC>
      <ChildrenD />
    </div>
    <div v-else>
      <ChildrenB>
        <ChildrenC>
          <ChildrenE />
          <ChildrenF />
        </ChildrenC>
      </ChildrenB>
      <ChildrenD />
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  name: 'ChildrenA2',
  props: {},
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD,
    ChildrenE,
    ChildrenF
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