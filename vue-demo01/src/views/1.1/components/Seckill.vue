<template>
  <h1 style="margin: 0 auto;border: 1px solid;width: 50%;background:rgba(210, 176, 127, 0.68);margin-top:30px;">{{modelInfo.title}}   开始时间:{{modelInfo.startTime}} 结束时间:{{modelInfo.endTime}}</h1>
</template>

<script>
export default {
  name:"Seckill", //秒杀
  props: {
      modelInfo:Array
  },
  components: {},
  data () {
    return {
    }
  },
  methods: {},
}
</script>
<style scoped>
</style>