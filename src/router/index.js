import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '@/views/EventListView.vue';
import EventLayout from '@/views/event/Layout.vue';
import EventDetails from '@/views/event/Details.vue';
import EventRegister from '@/views/event/Register.vue';
import EventEdit from '@/views/event/Edit.vue';
import NotFound from '@/views/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';

const routes = [
  {
    path: '/',
    name: 'event-list',
    component: EventListView,
    props: r => ({ page: parseInt(r.query.page, 10) || 1 }),
  },
  {
    path: '/events/:id',
    name: 'event-layout',
    props: true,
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'event-details',
        component: EventDetails,
      },
      {
        path: 'register',
        name: 'event-register',
        component: EventRegister,
      },
      {
        path: 'edit',
        name: 'event-edit',
        component: EventEdit,
      },
    ],
  },
  {
    path: '/event/:afterEvent(.*)',
    // params are auto mapped
    redirect: to => ({ path: '/events/' + to.params.afterEvent }),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
  },
  {
    path: '/404/:resource',
    name: '404-resource',
    component: NotFound,
    props: true,
  },
  {
    path: '/network-error',
    name: 'network-error',
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
