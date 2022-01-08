<template>
  <div class="cookie" @click="changeCookie" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore();

    function changeCookie() {
      store.addCookies(1)
    }

    return {
      changeCookie
    };
  },
});
</script>

<style>
.cookie {
  width: 300px;
  height: 300px;
  background: url('@/assets/cookie-min.png');
  background-size: contain;
  cursor: pointer;

  &:active {
    transform: scale(0.9)
  }
}
</style>
