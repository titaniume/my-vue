<template>
  <div>
    <p>name:{{name}}</p>
    <a-button type="primary" @click="handleChange">change me</a-button>
  </div>
</template>

<script>
export default {
  components: {
  
  },
  props: {
    name:{
      type:String
    },
    onChange:{
      type:Function,
      default:() =>{}
    },
  },
  data () {
    return {
    }
  },
  methods: {
    handleChange(){
      this.onChange("hello BigProps!")
    }
  },
}
</script>
<style scoped>
</style>