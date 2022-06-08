import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import GStore from './basicStore';
import store from './store';
import 'nprogress/nprogress.css';

createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app');
