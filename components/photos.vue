<template>
  <div class="card" style="width: 25rem">
    <img class="card-img-top" :src="img" :alt="attrib" style="height: 20rem" />
    <div class="card-body">
      <span
        ><img class="img-rounded img-responsive" :src="imgcap" :alt="attrib"
      /></span>
      <p class="card-text">{{ name }}</p>
      <span><button :href="img" download>Download</button></span>
      <a href="" class="download" @click="getDownload()"
        ><font-awesome-icon :icon="['fas', 'download']"
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Photos",
  props: ["img", "name", "attrib", "imgcap", "id"],
  data() {
    return {
      photos: {},
    };
  },
  methods: {
    getDownload() {
      axios({
        url: this.img,
        method: "GET",
        responseTyepe: "blob",
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileUrl;

        fileLink.setAttribute("download", "pexelry download.jpg");
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
button {
  border: none;
  background: orchid;
  padding: 3px 7px;
  margin-left: 5px;
  border-radius: 5px;
}
button:hover {
  border: none;
  background: rgb(61, 61, 61);
  color: rgb(194, 96, 191);
  padding: 3px 7px;
  margin-left: 5px;
  border-radius: 5px;
}
button:focus {
  border: none;
}
.download {
  color: #333333;
  font-size: 1.1rem;
  padding-left: 8px;
}
</style>