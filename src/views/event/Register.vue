<template>
  <p>Register for the event here</p>
  <button @click="register">Register Me</button>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  methods: {
    register() {
      // assume some api call succeeds
      this.$router.push({
        name: 'event-details',
      });
    },
  },
};
</script>
