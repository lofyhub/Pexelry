<script setup lang="ts">
import { defineProps, ref, withDefaults } from "vue";
import axios from "axios";
import PhotoPopup from "@/components/PhotoPopup.vue";

import DownloadIcon from "@/components/icons/Download.vue";

const props = withDefaults(
  defineProps<{
    img: string;
    name: string;
    attrib: string;
    imgcap: string;
    id: number;
    img_large: string;
  }>(),
  {}
);

const showImagePopup = ref(false);

// methods
function getDownload() {
  axios({
    url: `${props.img}`,
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
}
</script>
<template>
  <div class="w-96 h-80 ml-4 border mb-6 rounded overflow-hidden">
    <img
      class="w-full h-60 hover:cursor-pointer"
      :src="img"
      :alt="attrib"
      @click="showImagePopup = true"
    />
    <div class="flex my-4 ml-6">
      <img class="h-12 w-12 rounded-full" :src="imgcap" :alt="attrib" />

      <div class="flex ml-10 mt-3">
        <div>
          <p class="font-bold truncate text-base mr-8">
            {{ name.length > 10 ? name.slice(0, name.length - 6) : name }}
          </p>
        </div>

        <div @click="getDownload()">
          <DownloadIcon
            class="w-6 h-6 rounded-full text-center items-center justify-center ml-1"
          />
        </div>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <PhotoPopup
      v-if="showImagePopup"
      :image="props.img_large"
      @close="showImagePopup = false"
    />
  </Teleport>
</template>
<style scoped></style>
