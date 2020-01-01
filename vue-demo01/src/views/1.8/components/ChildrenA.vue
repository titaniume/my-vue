<template>
  <div class="border">
     <h1>A 结点</h1>
     <a-button type="primary" @click="() => ChangeColor()" >改变color</a-button>
     <ChildrenB/>
     <ChildrenC/>
     <ChildrenD/>
  </div>
</template>
<script>

import ChildrenB from "./ChildrenB";
import ChildrenC from "./ChildrenC";
import ChildrenD from "./ChildrenD";
export default {
  name: 'ChildrenA',
  components:{
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  //A节点通过provide提供theme属性,里面有color颜色 blue
  //第一种provide不是响应式的 用第二种方式响应式的 this下面挂载了props data methods等属性
  // provide(){
  //   return{
  //    theme:{
  //      color:this.color
  //    }
  //   }
  // },
  provide(){
    return{
      theme: this
    }
  },
  data() {
    return {
      color:"blue"
    };
  },
  methods:{
    ChangeColor(color){
      if(color){
        this.color = color;
      }else{
       this.color = this.color === "blue" ? "red" : "blue";
      }
    }
  }
};
</script>
<style lang='scss' scoped>
</style>