<template>
  <div class="border2">
    <h3  v-ant-ref="c => setChildrenRef('childrenE', c)" >E节点</h3>
  </div>
</template>

<script>
export default {
  name:"ChildrenE",
  props: {
  },
  components: {},
  inject:{
    setChildrenRef:{
      default:() =>{}
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