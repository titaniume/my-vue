<template>
  <div>
      <h1 style="margin: 0 auto;border: 1px solid;width: 50%;background:#c58787;margin-top:30px;">{{modelInfo.title}}   开始时间:{{modelInfo.startTime}} 结束时间:{{modelInfo.endTime}}</h1>
  </div>
</template>

<script>
export default {
  name:"Bargain",//砍价
  props: {
    modelInfo:Array
  },
  components: {},
  data () {
    return {
    }
  },
  mounted () {
  
  },
  methods: {},
}
</script>
<style scoped>
</style>  