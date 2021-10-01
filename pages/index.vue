<template>
  <div>
    <div class="pexelry-wrapper">
      <div class="pexelry-head">
        <div>
          <h1>Pexelry</h1>
          <p>pic it</p>
        </div>
      </div>
      <div class="search-wrapper">
        <form @submit.prevent="getSearch">
          <div class="input-group">
            <label>
              <input
                type="text"
                class="form-control"
                placeholder="Search photos here ..."
                v-model="search"
              />
            </label>

            <span
              ><button type="submit" class="input-group-addon bg-success">
                Search
              </button></span
            >
          </div>
        </form>
      </div>
    </div>
    <div>
      <!--vue-scroll-indicator -->
      <vue-scroll-indicator
        height="3px"
        color="#32d9cb"
        background="none"
      ></vue-scroll-indicator>
    </div>
    <div>
      <div v-if="photos.length === 0">
        <Loading />
      </div>
      <div v-else class="photos-wrapper">
        <Photos
          v-for="photo in photos"
          v-bind:key="photo.id"
          :name="photo.photographer"
          :attrib="photo.photographer_url"
          :img="photo.src.medium"
          :imgcap="photo.src.portrait"
          :id="photo.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/keys.js";
const Photos = () =>
  import(/* webpackChunkName: "Photoscomponent" */ "@/components/photos");
const Loading = () =>
  import(/* webpackChunkName: "Loadingcomponent" */ "@/components/Loading");
export default {
  components: {
    Photos,
    Loading,
  },
  data() {
    return {
      api_key: config.keys.api_key,
      photos: [],
      search: "store",
    };
  },
  computed: {
    photoos() {
      return this.$store.state.photos;
      console.log(this.$store.state.photos);
    },
  },
  async created() {
    //Called synchronously after the instance is created
    const headers = { Authorization: this.api_key };
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${this.search}&per_page=40`,
        { headers }
      );
      const data = await response.json();
      const photos = data.photos;
      //store the returned data into the photos array
      this.photos = photos;
      //prevent our input search data from showing up in the input box
      this.search = "";
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    // runs only on field search
    async getSearch() {
      const headers = { Authorization: this.api_key };
      // fetch photos from the api
      try {
        const response = await fetch(
          `https://api.pexels.com/v1/search?query=${this.search}&per_page=40`,
          { headers }
        );
        const data = await response.json();
        const photos = data.photos;
        this.photos = photos;
        this.search = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.pexelry-wrapper {
  width: 100%;
  height: 500px;
  background-image: url("../assets/pexels-marley-clovelly-3673525.webp");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 6rem;
}
.pexelry-head {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}
h1 {
  font-size: 6rem;
}
p {
  font-size: 2.5rem;
}
h1,
p {
  text-align: center;
}
.search-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 1.5rem 0 0 0;
}
button {
  text-align: center;
  padding: 7px 10px;
  margin-left: 0.5px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  border: none;
  font-weight: 500;
}
button:focus {
  outline: none;
}
.photos-wrapper {
  width: 85%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 0;
}
.error {
  padding: 4rem 0;
}
.error p {
  font-size: 24px;
}
</style>
