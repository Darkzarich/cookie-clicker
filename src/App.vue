<template>
  <div class="container">
    <CookieCounter />
    <Cookie />
    <UpgradeList />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "@/store/index";
import Cookie from "@/components/Cookie.vue";
import CookieCounter from "@/components/CookieCounter.vue";
import UpgradeList from "@/components/UpgradeList.vue";
import { getUpgradeEffect } from '@/utils/index';

const TICK_INTERVAL = 1000;

export default defineComponent({
  components: {
    Cookie,
    CookieCounter,
    UpgradeList
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      setInterval(() => {
        let cookiesToAdd = 0;

        for(const upgradeKey in store.upgradesCount) {
          cookiesToAdd = cookiesToAdd + getUpgradeEffect(upgradeKey) 
            * store.upgradesCount[upgradeKey];
        }

        store.addCookies(cookiesToAdd);
      }, TICK_INTERVAL)
    })
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
