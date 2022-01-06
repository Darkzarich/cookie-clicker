import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    cookies: 0,
  }),
  actions: {
    addCookies(amount: number) {
      this.cookies = this.cookies + amount;
    },
  },
});
