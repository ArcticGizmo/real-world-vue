<template>
  <div class="event-list-view">
    <EventCard v-for="event in events" :key="event.id" :event="event" />

    <div class="pagination">
      <router-link
        id="page-prev"
        v-if="page !== 1"
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        &#60; Previous
      </router-link>

      <router-link
        id="page-next"
        v-if="hasNextPage"
        :to="{ name: 'event-list', query: { page: page + 1 } }"
        rel="next"
      >
        Next &#62;
      </router-link>
    </div>
  </div>
</template>

<script>
import eventService from '@/services/eventService.js';
import EventCard from '@/components/EventCard.vue';

const LIMIT = 2;

export default {
  name: 'EventListView',
  props: {
    page: Number,
  },
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
      totalEvents: 0,
    };
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    const page = parseInt(routeTo.query.page) || 1;
    eventService
      .getEvents(LIMIT, page)
      .then(resp => {
        next(vm => {
          vm.events = resp.data;
          vm.totalEvents = resp.headers['x-total-count'];
        });
      })
      .catch(() => {
        next({ name: 'network-error' });
      });
  },
  beforeRouteUpdate(routeTo) {
    const page = parseInt(routeTo.query.page) || 1;
    return eventService
      .getEvents(LIMIT, page)
      .then(resp => {
        this.events = resp.data;
        this.totalEvents = resp.headers['x-total-count'];
      })
      .catch(() => {
        return { name: 'network-error' };
      });
  },
  computed: {
    hasNextPage() {
      const totalPages = Math.ceil(this.totalEvents / LIMIT);

      return this.page < totalPages;
    },
  },
};
</script>

<style scoped>
.event-list-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination {
  display: flex;
  width: 290px;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
