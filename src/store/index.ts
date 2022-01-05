import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    test: 0,
  }),
  actions: {
    incTest() {
      this.test++;
    },
  },
});
