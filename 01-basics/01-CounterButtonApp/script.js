import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Counter = defineComponent({
  data: () => ({ count: 0 }),
});

createApp(Counter).mount('#app');
