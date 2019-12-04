<template>
    <div>
        <p>name:{{name}}</p>
        <p>type:{{type}}</p>
        <p>list:{{list}}</p>
        <p>isVisible:{{isVisible}}</p>
        <a-button type="primary" @click="handleClick">click me change type</a-button>
    </div>
</template>
<script>
export default {
  name:"Props",
  props: {
    name:String,
    type:{
      validator:function(value){
       // 这个值必须匹配下列字符串中的一个
        return ["success", "warning", "danger"].includes(value);
      }
    },
    list: {
      type: Array,
      // 对象或数组默认值必须从一个工厂函数获取
      default: () => []
    },
    isVisible:{
      type:Boolean,
      default:false
    },
    onChange:{
      type:Function,
      default:()=>[]
    }
  },
  data () {
    return {

    }
  },
  created () {

  },
  methods: {
    handleClick(){
       // 不要这么做、不要这么做、不要这么做  
       // this.type = "warning";
       debugger
      this.onChange(this.type === "success" ? "warning" : "error");
    }
  }
}
</script>
<style scoped>

</style>