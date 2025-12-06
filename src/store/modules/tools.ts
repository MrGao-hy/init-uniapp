import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useToolsStore = defineStore(
  'hy-tools',
  () => {
    const darkMode = ref('light');
    const themeColor = ref('#3D7EFF');

    return {
      darkMode,
      themeColor,
    };
  },
  { persist: true }
);
