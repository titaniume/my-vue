<template>
  <div class="border">
    <a-button type="primary" @click="init =!init" >删除CEF，新建GEF</a-button>
    <div v-if="init">
        <ChildrenB/>
        <ChildrenC>
          <ChildrenE/>
          <ChildrenF/>
        </ChildrenC>
        <ChildrenD/>
    </div>
    <div v-else>
        <ChildrenB/>
        <ChildrenG>
          <ChildrenE/>
          <ChildrenF/>
        </ChildrenG>
        <ChildrenD/>
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
import ChildrenG from "./ChildrenG";
export default {
  name: 'ChildrenA3',
  components:{
    ChildrenB,
    ChildrenC,
    ChildrenD,
    ChildrenE,
    ChildrenF,
    ChildrenG
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