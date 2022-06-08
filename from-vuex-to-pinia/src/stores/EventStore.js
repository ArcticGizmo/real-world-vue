import { defineStore } from 'pinia';

import EventService from '@/services/EventService.js';

export const useEventStore = defineStore('EventStore', {
  state() {
    return {
      events: [],
      event: null,
    };
  },
  getters: {
    numberOfEvents: state => state.events.length,
  },
  actions: {
    fetchEvents() {
      return EventService.getEvents().then(resp => (this.events = resp.data));
    },
    fetchEvent(id) {
      const existingEvent = this.events.find(e => e.id === id);
      if (existingEvent) {
        this.event = existingEvent;
        return;
      }

      return EventService.getEvent(id).then(resp => (this.event = resp.data));
    },
    createEvent(event) {
      return EventService.postEvent(event).then(() => (this.event = event));
    },
  },
});
