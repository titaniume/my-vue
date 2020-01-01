<template functional>
  <div class="border2">
    <!-- I节点是函数使组件  通过 injections.theme.color 获取颜色-->
    <h3 :style="{ color: injections.theme.color }">I 结点</h3>
  </div>
</template>
<script>
export default {
  inject: {
    theme: {
      default: () => ({})
    }
  }
};
</script>
