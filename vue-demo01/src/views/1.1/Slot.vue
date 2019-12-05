<template>
  <div>
    <slot />
    <slot name="testSlot" />
    <slot name="testSlot2" v-bind="{ value }" />
  </div>
</template>

<script>
export default {
  name: "Slot",
  props: {},
  components: {},
  data() {
    return {
      value: "测试值"
    };
  },
  methods: {}
};
</script>
<style scoped></style>
