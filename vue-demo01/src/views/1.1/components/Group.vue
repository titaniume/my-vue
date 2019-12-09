<template>
  <h1 style="margin: 0 auto;border: 1px solid;width: 50%;background:rgb(131, 185, 168);margin-top:30px;">{{modelInfo.title}}   开始时间:{{modelInfo.startTime}} 结束时间:{{modelInfo.endTime}}</h1>
</template>

<script>
export default {
  name:"Group",//团购
  props: {
      modelInfo:Object
  },
  components: {},
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