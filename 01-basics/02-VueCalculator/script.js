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
          return Number(this.leftValue) + Number(this.rightValue);
        case '-':
          return Number(this.leftValue) - Number(this.rightValue);
        case '*':
          return Number(this.leftValue) * Number(this.rightValue);
        case '/':
          return Math.floor(Number(this.leftValue) / Number(this.rightValue));
      }

      return 0;
    },
  },
  methods: {
    changeOpertaion({target}) {
      if (target.type === 'radio') {
        const { name, value } = target;
        this.operation = name;
      }
    }
  }
});

createApp(Calculator).mount('#app');

// Создайте Vue приложение
