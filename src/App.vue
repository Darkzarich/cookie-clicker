<template>
  <div class="container">
    <CookieCounter />
    <Cookie />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cookie from "@/components/Cookie.vue";
import CookieCounter from "@/components/CookieCounter.vue";

export default defineComponent({
  components: {
    Cookie,
    CookieCounter
  }
});
</script>

<style>
body {
  background: url('@/assets/texture.jpg');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  height: 100vh;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
