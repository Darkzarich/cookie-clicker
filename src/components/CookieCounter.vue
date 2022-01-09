<template>
  <div class="cookie-counter">
    {{ Math.floor(cookies) }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useCookies from '@/composables/useCookies'

export default defineComponent({
  setup() {
    const { cookies } = useCookies();

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
