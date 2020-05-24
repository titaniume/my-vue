<template>
  <div id="app">
   {{count}}
   <button @click="$store.commit('increment')" >mutations---->count++</button>
   <button @click="$store.dispatch('increment')">actions---->count++</button>
   {{$store.getters.doubleCount}}
  </div>
</template>

<script>

export default {
  name: 'App',
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
}
</script>

<style>

</style>
