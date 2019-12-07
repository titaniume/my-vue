<template>
 <div>
   <!-- 表单输入绑定 -->
   <!-- v-model 语法糖 简写模式 -->
    <input v-model="message"/>
    <!-- 非简写模式 value 属性和input事件的简写 -->
    <input :value="message" @input="handleChange" />
    <p>{{message}}</p>
    <!-- 扩展：自定义组件上使用v-model -->
    <baseCheckbox v-model="lovingVue" ></baseCheckbox>
 </div>
</template>

<script>
import baseCheckbox from "./components/baseCheckbox";
 export default {
   components:{
     baseCheckbox
   },
   data () {
     return {
       message:'',
       lovingVue:true
     }
   },
   created() {

   },
   methods: {
    handleChange(e){
      this.message = e.target.value;
    }
   }
 }
</script>

<style lang='less' scoped>

 
</style>
