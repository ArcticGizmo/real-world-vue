import eventService from '@/services/eventService';
import { createStore } from 'vuex';

export default createStore({
  state: {
    user: 'Adam Ahar',
    events: [],
    totalEvents: 0,
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, { events, totalEvents }) {
      state.events = events;
      state.totalEvents = totalEvents;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      return eventService
        .postEvent(event)
        .then(() => {
          commit('ADD_EVENT', event);
        })
        .catch(e => {
          console.error(e);
          throw e;
        });
    },
    fetchEvents({ commit }, { perPage, page }) {
      return eventService
        .getEvents(perPage, page)
        .then(resp => {
          commit('SET_EVENTS', { events: resp.data, totalEvents: resp.headers['x-total-count'] });
        })
        .catch(e => {
          console.error(e);
          throw e;
        });
    },
  },
  modules: {},
});
