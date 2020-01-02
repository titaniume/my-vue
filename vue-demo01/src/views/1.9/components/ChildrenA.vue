<template>
  <div class="border">
      <h1>A 结点</h1>
      <a-button type="primary" @click="getEH3Ref">获取E组件上h3标签节点ref</a-button>
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
  name:"ChildrenA",
  props: {
  },
  components: {
    ChildrenB,
    ChildrenC,
    ChildrenD
  },
  provide(){
    return{
      setChildrenRef:(name,ref) => {
        this[name] = ref;
      },
      getChildrenRef:name =>{
        return  this[name];
      },
      getRef:() => {
          return this;
      }
    }
  },
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    getEH3Ref(){
      console.log(this.childrenE)
    }
  },
}
</script>
<style scoped>
</style>