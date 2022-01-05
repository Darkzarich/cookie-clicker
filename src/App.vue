<template>
  {{ testCount }}
  <button @click="inc">
    Add
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "../src/store/index";

export default defineComponent({
  setup() {
    const store = useStore();
    const { test: testCount } = storeToRefs(store);

    return {
      testCount,
      inc: store.incTest
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
