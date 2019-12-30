<template>
  <div>
    <a-button type="primary" @click="show=!show">销毁</a-button>&nbsp;
    <a-button type="primary" v-if="show" v-append-text="`hello ${number}`" @click="number++" ></a-button>
  </div>
</template>

<script>
export default {
    directives: {
      appendText: {
        bind() {
          console.log("bind");
        },
        inserted(el, binding) {
          el.appendChild(document.createTextNode(binding.value));
          console.log("inserted", el, binding);
        },
        update() {
          console.log("update");
        },
        componentUpdated(el, binding) {
          el.removeChild(el.childNodes[el.childNodes.length - 1]);
          el.appendChild(document.createTextNode(binding.value));
          console.log("componentUpdated");
        },
        unbind() {
          console.log("unbind");
        }
    }
  },
  data () {
    return {
      show:true,
      number:1
    }
  }
}
</script>
<style scoped>
</style>