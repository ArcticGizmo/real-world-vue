<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  inject: ['GStore'],
  methods: {
    register() {
      // assume some api call succeeds

      this.GStore.flashMessage = `You are successfully registered for ${this.event.title}`;

      setTimeout(() => (this.GStore.flashMessage = ''), 3000);

      this.$router.push({
        name: 'event-details',
      });
    },
  },
};
</script>
