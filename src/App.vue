<script setup lang="ts">
import FooterVue from "./components/Footer.vue";
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <router-view />
  <FooterVue />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(257 257 257);
}
</style>
