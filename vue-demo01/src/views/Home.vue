<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <template v-for="i in 11">
      <div :key="i">
        <p style="font-size:16px;">
          <router-link :to="`/1.${i}`">{{ `1.${i}` }}章节</router-link>
        </p>
      </div>
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    // HelloWorld
  }
};
</script>
