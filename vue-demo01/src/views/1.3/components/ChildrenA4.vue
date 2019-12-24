<template>
  <div class="border">
    <a-button type="primary" @click="init = !init">更新删除新建</a-button>
    <div v-if="init">
      <ChildrenB :number="1"/>
      <ChildrenB :number="2">
        <ChildrenE/>
        <ChildrenF/>
      </ChildrenB>
      <ChildrenB :number="3"/>
    </div>
    <div v-else>
      <ChildrenB :number ="2">
        <ChildrenE/>
        <ChildrenF/>
      </ChildrenB>
      <ChildrenB :number="1"/>
      <ChildrenB :number="3"/>
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  name: 'ChildrenA4',
  components: {
    ChildrenB,
    ChildrenE,
    ChildrenF
  },
  data() {
    return {
      init:true
    };
  }
}
</script>
<style lang='scss' scoped>
</style>