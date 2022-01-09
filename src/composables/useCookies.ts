import { computed } from 'vue';
import { useStore } from '@/store/index';

const useCookies = () => {
  const store = useStore();
  const cookies = computed(() => store.cookies);

  return {
    cookies,
  };
};

export default useCookies;
