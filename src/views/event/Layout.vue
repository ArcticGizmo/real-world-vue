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
import eventService from '@/services/eventService';
export default {
  props: {
    id: null,
  },
  data() {
    return {
      event: null,
    };
  },
  created() {
    eventService
      .getEvent(this.id)
      .then(resp => (this.event = resp.data))
      .catch(e => console.error(e));
  },
};
</script>
