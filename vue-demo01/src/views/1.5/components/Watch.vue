<template>
  <div>
    {{ $data }}
    <br />
    <a-button type="primary" @click="() => (a += 1)">a+1</a-button>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      a: 1,
      b: { c: 2, d: 3 },
      e: {
        f: {
          g: 4
        }
      },
      h: []
    };
  },
  watch: {
    a: function(val, oldVal) {
      this.b.c += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.c": function(val, oldVal) {
      this.b.d += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    "b.d": function(val, oldVal) {
      this.e.f.g += 1;
      console.log("new: %s, old: %s", val, oldVal);
    },
    e: {
      handler: function(val, oldVal) {
        this.h.push("😄");
        console.log("new: %s, old: %s", val, oldVal);
      },
      deep: true
    },
    h(val, oldVal) {
      console.log("new: %s, old: %s", val, oldVal);
    }
  }
};
</script>
