<template>
  <div>
    <Navheader />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  components: {
    Navheader: () => import("@/components/Navheader"),
    Footer: () => import("@/components/Footer"),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
html {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
