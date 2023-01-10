<script setup lang="ts">
import Card from "@/components/Card.vue";
import { ref, onMounted, computed } from "vue";
import { useRootStore } from "@/store";
import { toastSuccess } from "@/plugins/toast";

const store = useRootStore();
const searchinput = ref(``);
const photos = computed(() => store.$state.photos);

onMounted(async () => {
  await store.fetchPhotos("cities");
});

// methods

function getSearch() {
  if (!searchinput.value) {
    toastSuccess(`  Please enter search term`);
    return;
  }
  store.fetchPhotos(searchinput.value);
  searchinput.value = ``;
}
</script>

<template>
  <div>
    <div
      class="w-full h-[400px] py-10 bg-cover bg-no-repeat bg-center bg-[url('https://images.pexels.com/photos/14700386/pexels-photo-14700386.jpeg')]"
    >
      <div class="text-center pt-10">
        <h1 class="font-bold text-8xl">Pexelry</h1>
        <p class="text-3xl mt-6">pic it</p>
      </div>
      <div class="text-center my-6">
        <form @submit.prevent="getSearch">
          <div class="input-group">
            <label>
              <input
                type="text"
                class="py-2 px-8 border focus:outline-none"
                placeholder="Search photos here ..."
                v-model="searchinput"
              />
            </label>

            <span
              ><button
                type="submit"
                class="py-2.5 px-4 bg-indigo-100 font-bold"
              >
                Search
              </button></span
            >
          </div>
        </form>
      </div>
    </div>
    <div class="w-4/5 mx-auto flex flex-wrap my-8">
      <Card
        v-for="photo in photos"
        v-bind:key="photo.id"
        :name="photo.photographer"
        :attrib="photo.photographer_url"
        :img="photo.src.medium"
        :img_large="photo.src.large2x"
        :imgcap="photo.src.portrait"
        :id="photo.id"
      />
    </div>
  </div>
</template>

<style scoped></style>
