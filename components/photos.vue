<template>
  <div class="card" style="width: 25rem">
    <img
      class="card-img-top"
      :src="img"
      :alt="attrib"
      style="height: 20rem"
      height="320"
    />
    <div class="card-body">
      <span>
        <img
          class="img-rounded img-responsive"
          width="40"
          height="40"
          :src="imgcap"
          :alt="attrib"
      /></span>

      <p class="card-text">{{ name }}</p>
      <p class="download" @click="getDownload()">
        <font-awesome-icon :icon="['fas', 'download']" />
      </p>
    </div>
  </div>
</template>
<script>
import lozad from "lozad";
const axios = require("axios");
export default {
  name: "Photos",
  props: ["img", "name", "attrib", "imgcap", "id"],
  data() {
    return {
      loading: true,
      // dimage = download image
      dimage: this.$props.img,
    };
  },
  methods: {
    // download image
    getDownload() {
      axios({
        url: `${this.dimage}`,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileUrl;

        fileLink.setAttribute("download", "pexelry download.jpeg");
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },
  },
};
</script>
<style scoped>
.card {
  margin: 5px 2px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  height: 25rem;
}
.img-rounded {
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  margin: 0;
}
p {
  display: inline-block;
  padding-left: 25px;
}
.download {
  cursor: pointer;
  color: #333333;
  font-size: 1.1rem;
  padding-left: 2.5rem;
}
</style>