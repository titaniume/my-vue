<template>
  <div class="border">
    <a-button type="primary" @click="init =!init">更新新建(无key)</a-button>
    <div v-if="init">
       <ChildrenB :number="1"/>
       <ChildrenB :number="2"/>
       <ChildrenB :number="3"/>
    </div>
     <div v-else>
       <ChildrenB :number="1"/>
       <ChildrenB :number="4"/>
       <ChildrenB :number="2"/>
       <ChildrenB :number="3"/>
    </div>

  </div>
</template>
<script>
import ChildrenB from "./ChildrenB";
export default {
  name: 'ChildrenA6',
  components: {
    ChildrenB
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