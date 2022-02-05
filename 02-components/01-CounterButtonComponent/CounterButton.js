import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  emits: ['update:count'],
  methods: {
    updateCounter() {
      this.$emit('update:count', this.count + 1);
    },
  },
  template: `
    <button type='button' @click='updateCounter'>{{ count }}</button>`,
});
