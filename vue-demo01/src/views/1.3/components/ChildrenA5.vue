<template>
  <div class="border">
    <a-button type="primary" @click="init =!init">移动(有key)</a-button>
    <div v-if="init">
      <ChildrenB key="1" :number="1"/>
      <childrenB key="2" :number="2">
        <ChildrenE/>
        <ChildrenF/>
      </childrenB>
      <childrenB key="3" :number="3"/>
    </div>
    <div v-else>
      <ChildrenB key="2" :number="1">
        <ChildrenE/>
        <ChildrenF/>
      </ChildrenB>
      <ChildrenB key="1" :number="1"/>
      <childrenB key="3" :number="3"/>
    </div>
  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  name: 'ChildrenA5',
  components: {
    ChildrenB,
    ChildrenE,
    ChildrenF
  },
  data() {
    return {
      init:true
    };
  },
};
</script>
<style lang='scss' scoped>
</style>