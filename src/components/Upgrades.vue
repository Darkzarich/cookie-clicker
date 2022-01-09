<template>
  <div class="upgrades-list">
    <div 
      v-for="(upgrade, upgradeKey) of upgrades" 
      class="upgrade" 
      :class="{'upgrade--not-available': getTotalPrice(upgradeKey as string, upgrade.price) > cookies }"
      @click="handleUpgradeBuy(upgradeKey as string, upgrade.price)"
    >
      <div class="upgrade__image-container">
        <img :src="upgrade.image" class="upgrade__image">
        <template v-if="upgradesCount[upgradeKey]">
          x{{ upgradesCount[upgradeKey] }}
        </template>
      </div>
      <div class="upgrade__name">
        {{ upgrade.name }}
      </div>
      <div class="upgrade__price">
        {{ getTotalPrice(upgradeKey as string, upgrade.price) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getUpgrades } from '@/utils/index';
import { useStore } from "@/store/index";

interface Upgrade {
  price: number;
  name: string;
}

export default defineComponent({
  setup() {
    const store = useStore();

    function handleUpgradeBuy(upgradeKey: string, price: number) {
      const totalPrice = getTotalPrice(upgradeKey, price);

      if (store.cookies < price) {
        return;
      }

      store.buyUpgrade(upgradeKey, totalPrice);
    }

    function getTotalPrice(upgradeKey: string, price: number) {
      return (store.upgradesCount[upgradeKey] + 1 || 1)
        * price;
    }

    return {
      upgrades: getUpgrades(),
      cookies: store.cookies,
      getTotalPrice,
      upgradesCount: store.upgradesCount,
      handleUpgradeBuy
    }
  },
})
</script>

<style>
.upgrade {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 10px;
    color: white;
    cursor: pointer;

    &:last-child {
      margin-bottom: 0;
    }

    &__image-container {
      display: flex;
      height: 100%;
      width: 50px;
      margin-right: 55px;
      align-items: center;
      font-size: 15px;
      font-weight: bolder;
    }

    &__price {
      font-size: 20px;
      font-weight: bold;
      margin: auto;
      width: 70px;
      text-align: end;
    }

    &__name {
      font-weight: 700;
      margin: auto;
      width: 100px;
    }

    &__image {
      height: 100%;
    }

    &--not-available {
      opacity: 0.5;
    }
}

.upgrades-list {
    border: 1px solid rgba(255, 255, 255, 0.452);
    padding: 20px;
    width: 300px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    margin-top: 20px;
}
</style>