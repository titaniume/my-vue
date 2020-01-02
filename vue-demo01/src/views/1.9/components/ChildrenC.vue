<template>
  <div class="border1">
    <h2>C节点</h2>
    <ChildrenE/>
    <ChildrenF/>
  </div>
</template>

<script>
import ChildrenE from "./ChildrenE";
import ChildrenF from "./ChildrenF";
export default {
  name:"ChildrenC",
  props: {
  },
  components: {
    ChildrenE,
    ChildrenF
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {},
}
</script>
<style scoped>
</style>