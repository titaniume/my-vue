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
  inheritAttrs:false,  //如果你不希望组件的根元素继承特性，你可以在组件的选项中设置为false
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
       //这里直接返回 状态给父组件
      this.onChange(this.type === "success" ? "danger" : "success");
    }
  }
}
</script>
<style scoped>
</style>