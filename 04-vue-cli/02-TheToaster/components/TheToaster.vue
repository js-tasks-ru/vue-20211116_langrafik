<template>
  <div class="toasts">
    <div v-for="toast in stack">
      <toaster-item :toast-type="toast.type" :message="toast.message" />
    </div>
  </div>
</template>

<script>
import UiIcon from './UiIcon';
import ToasterItem from './ToasterItem';

export default {
  name: 'TheToaster',

  components: { ToasterItem, UiIcon },

  data: () => {
    return {
      stack: [],
    };
  },

  methods: {
    generateId() {
      return new Date().valueOf();
    },
    destroyToasterTimer(id, delay) {
      setTimeout(() => {
        const toastIndex = this.stack.findIndex((t) => t.id === id);
        this.stack.splice(toastIndex, 1);
      }, delay);
    },
    success(message = '', visibilityTime = 5000) {
      const id = this.generateId();
      this.stack.push({
        type: 'success',
        id,
        message,
      });
      this.destroyToasterTimer(id, visibilityTime);
    },
    error(message = '', visibilityTime = 5000) {
      const id = this.generateId();
      this.stack.push({
        type: 'error',
        message,
      });
      this.destroyToasterTimer(id, visibilityTime);
    },
  },
};
</script>

<style scoped>
.toasts {
  position: fixed;
  bottom: 8px;
  right: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  white-space: pre-wrap;
  z-index: 999;
}

@media all and (min-width: 992px) {
  .toasts {
    bottom: 72px;
    right: 112px;
  }
}
</style>
