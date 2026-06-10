<template>
  <main-header />
  <router-view />
</template>
<script>
import MainHeader from "./components/MainHeader.vue";

export default {
  name: "App",
  components: {
    MainHeader,
  },
};
</script>
<style lang="scss">
#app {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080616;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
  }
  li a.router-link-exact-active {
    color: #2c3e50 !important;
  }
}
</style>
