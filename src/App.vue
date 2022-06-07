<template>
  <div id="flash-message" v-if="GStore.flashMessage">{{ GStore.flashMessage }}</div>
  <nav>
    <router-link :to="{ name: 'event-list' }">Events</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  inject: ['GStore'],
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes yellow-fade {
  from {
    background: yellow;
  }
  to {
    background: transparent;
  }
}

#flash-message {
  animation-name: yellow-fade;
  animation-duration: 3s;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
