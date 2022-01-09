<template>
  <div 
    class="upgrade" 
    :class="{'upgrade--not-available': totalPrice > cookies }"
    @click="handleUpgradeBuy()"
  >
    <div class="upgrade__image-container">
      <img :src="image" class="upgrade__image">
      <template v-if="upgradesCount[upgradeKey]">
        x{{ upgradesCount[upgradeKey] }}
      </template>
    </div>
    <div class="upgrade__name">
      {{ name }}
    </div>
    <div class="upgrade__price">
      {{ totalPrice }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from "@/store/index";
import useCookies from '@/composables/useCookies';

export default defineComponent({
  props: {
    upgradeKey: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      default: 0
    },
    image: {
      type: String,
      default: '',
    },
    name: String
  },
  setup(props) {
    const store = useStore();

    const { cookies } = useCookies();

    const totalPrice = computed(() => {
      return (store.upgradesCount[props.upgradeKey] + 1 || 1)
        * props.price;
    })

    function handleUpgradeBuy() {      
      if (store.cookies < totalPrice.value) {
        return;
      }

      store.buyUpgrade(props.upgradeKey, totalPrice.value);
    }

    return {
      cookies,
      totalPrice,
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
</style>