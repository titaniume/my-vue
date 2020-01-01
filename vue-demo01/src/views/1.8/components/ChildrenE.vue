<template>
  <div class="border2">
    <h3 :style="{ color: theme.color }">E 结点</h3>
    <button @click="handleClick">改变color为green</button>
  </div>
</template>
<script>
export default {
  name:"ChildrenE",
  components: {},
  created(){
    console.log(this)
  },
  inject: {
    theme: {
      default: () => ({})
    }
  },
  methods: {
    handleClick() {
      //这里取不到this methods里的changeColor  未解决
      if (this.theme.changeColor) {
         this.theme.changeColor("green");
      }
    }
  }
};
</script>
