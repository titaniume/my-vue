<template>
  <div>
    <span>做一个简单的字符串反转</span>
    <p>计算属性方式:{{reversedMessageByComputed}}</p>
    <p>methods方式:{{reversedMessageByMethods()}}</p>
    <!-- reversedMessageByComputed 不会执行因为message没有变化，大数据页面不会再次计算提高性能-->
    <p>强制刷新模板:<a-button type="primary"  @click="() => $forceUpdate()">forceUpdate</a-button></p>
    <!-- 只有当data里面的数据发生变化时候计算属性才会执行 -->
    <p><a-input v-model="message" style="width:30%"></a-input></p>
  </div>
</template>
<script>
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {
      message:'Hello Today is 2019-12-22 17:10:14'
    };
  },
  computed: {
    reversedMessageByComputed(){
       console.log("执行----reversedMessageByComputed");
       return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    reversedMessageByMethods(){
      console.log("执行----reversedMessageByMethods");
       return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
};
</script>
<style lang='scss' scoped>
</style>