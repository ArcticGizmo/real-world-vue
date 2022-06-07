<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <router-link :to="{ name: 'event-details' }">Details</router-link>
      |
      <router-link :to="{ name: 'event-register' }">Register</router-link>
      |
      <router-link :to="{ name: 'event-edit' }">Edit</router-link>
    </nav>

    <router-view :event="event" />
  </div>
</template>

<script>
export default {
  inject: ['GStore'],
  computed: {
    event() {
      return this.GStore.event;
    },
  },
};
</script>
