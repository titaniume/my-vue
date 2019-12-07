<template>
 <div>
   <input type="checkbox" :checked="checked" @change="handleChange" />
   <!-- v-bind缩写: :-->
   <!-- v-on 缩写 @事件 -->
 </div>
</template>

<script>
 export default {
   model:{
     prop:'checked',
     event:'change'
   },
   props:{
     checked:Boolean
   },
   data () {
     return {

     }
   },
   created() {

   },
   methods: {
      handleChange(e){
         console.log(e.target.checked)
        this.$emit('change',e.target.checked)
      }
   }
 }
</script>

<style lang='less' scoped>

 
</style>
