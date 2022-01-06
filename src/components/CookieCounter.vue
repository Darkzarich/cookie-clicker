<template>
  <div class="cookie-counter">
    {{ cookies }}
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore();
    
    const cookies = computed(() => store.cookies)

    return {
      cookies
    };
  },
});
</script>

<style>
.cookie-counter {
  font-size: 40px;
  user-select: none;
  text-align: center;
  color: white;
  font-weight: 900;
  margin-bottom: 20px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>
