<template>
  <div v-if="event" class="event-details">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import eventService from '@/services/eventService';
export default {
  name: 'EventDetailsView',
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
