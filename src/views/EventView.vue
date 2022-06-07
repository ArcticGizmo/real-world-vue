<template>
  <div class="event-view">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import eventService from '@/services/eventService.js';
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'EventView',
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    eventService
      .getEvents()
      .then(resp => (this.events = resp.data))
      .catch(error => console.error(error));
  },
};
</script>

<style scoped>
.event-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
