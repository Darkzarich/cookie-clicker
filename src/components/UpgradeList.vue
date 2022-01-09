<template>
  <div class="upgrades-list">
    <Upgrade 
      v-for="(upgrade, upgradeKey) of upgrades" 
      :key="upgradeKey" 
      :upgrade-key="(upgradeKey as string)"
      :price="upgrade.price"
      :name="upgrade.name"
      :image="upgrade.image"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Upgrade from '@/components/Upgrade.vue';
import { getUpgrades } from '@/utils/index';

export default defineComponent({
  components: {
    Upgrade
  },
  setup() {
    return {
      upgrades: getUpgrades(),
    }
  },
})
</script>

<style>
.upgrades-list {
    border: 1px solid rgba(255, 255, 255, 0.452);
    padding: 20px;
    width: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    margin-top: 20px;
}
</style>