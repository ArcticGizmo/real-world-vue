import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '@/views/EventListView.vue';
import EventDetailsView from '@/views/EventDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: r => ({ page: parseInt(r.query.page, 10) || 1 }),
  },
  {
    path: '/event/:id',
    name: 'event-details',
    props: true,
    component: EventDetailsView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
