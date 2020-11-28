<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">
      <!-- <img src="../assets/John-Philip.jpg" width="30" height="30" class="d-inline-block align-top img-rounded" alt=""> -->
      Pexelry
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <nuxt-link to="/" class="nav-link"> Home</nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link to="/about" class="nav-link"> About</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  head() {
    return {
      title: "Pexelry ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "search all the beautifull photos",
        },
      ],
    };
  },
};
</script>

<style scoped>
nuxt-link:hover {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
.img-rounded {
  border-radius: 50%;
}
</style>