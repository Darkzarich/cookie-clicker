import { defineStore } from 'pinia';

interface IStore {
  cookies: number;
  upgradesCount: {
    [key: string]: number;
  };
}

export const useStore = defineStore('main', {
  state: (): IStore => ({
    cookies: 0,
    upgradesCount: {},
  }),
  actions: {
    addCookies(amount: number) {
      this.cookies = this.cookies + amount;
    },
    buyUpgrade(upgradeKey: string, price: number) {
      this.cookies = this.cookies - price;

      if (upgradeKey in this.upgradesCount) {
        this.upgradesCount[upgradeKey] += 1;
      } else {
        this.upgradesCount[upgradeKey] = 1;
      }
    },
  },
});
