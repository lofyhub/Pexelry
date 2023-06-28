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
    photographer_ur: string;
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
  <div class="max-w-full h-auto border rounded-md overflow-hidden">
    <img
      class="w-full h-80 hover:cursor-pointer"
      :src="img_large"
      :alt="attrib"
      @click="showImagePopup = true"
    />
    <div class="flex py-4 space-x-4 ml-3">
      {{ photographer_ur }}
      <img class="h-12 w-12 rounded-full" :src="img" :alt="attrib" />

      <div class="flex justify-around space-x-20">
        <div>
          <p class="font-bold truncate text-base">
            {{ name.length > 10 ? name.slice(0, name.length - 6) : name }}
          </p>
          <span class="text-gray-400">
            @{{ name.length > 10 ? name.slice(0, name.length - 6) : name }}
          </span>
        </div>

        <div
          @click="getDownload()"
          class="w-6 h-6 rounded-full text-center cursor-pointer"
        >
          <DownloadIcon />
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
