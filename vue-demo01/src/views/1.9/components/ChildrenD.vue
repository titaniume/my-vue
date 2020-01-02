<template>
  <div class="border1">
    <h2>D节点</h2>
    <ChildrenG/>
    <ChildrenH v-ant-ref="c => setChildrenRef('childrenH',c)" />
    <ChildrenI/>
  </div>
</template>

<script>
import ChildrenG from "./ChildrenG";
import ChildrenH from "./ChildrenH";
import ChildrenI from "./ChildrenI";
export default {
  name:"ChildrenD",
  props: {
  },
  components: {
    ChildrenG,
    ChildrenH,
    ChildrenI
  },
  inject:{
    setChildrenRef:{
      default:() => {}
    }
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