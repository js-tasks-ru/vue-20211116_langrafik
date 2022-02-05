import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const Calculator = defineComponent({
  data: () => ({
    leftValue: 0,
    rightValue: 0,
    operation: '+',
  }),
  computed: {
    result() {
      switch (this.operation) {
        case '+':
          return this.leftValue + this.rightValue;
        case '-':
          return this.leftValue - this.rightValue;
        case '*':
          return this.leftValue * this.rightValue;
        case '/':
          return Math.floor(this.leftValue / this.rightValue);
      }

      return 0;
    },
  },
});

createApp(Calculator).mount('#app');

// Создайте Vue приложение
