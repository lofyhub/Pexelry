<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from "vue";

import XIcon from "@/components/icons/XIcon.vue";

const props = withDefaults(
  defineProps<{
    image: string;
  }>(),
  {}
);
defineEmits(["close"]);
</script>

<template>
  <!-- Photo popup -->
  <div
    class="popup bg-gray-600 modal-animation fixed top-0 bottom-0 left-0 right-0 z-30 h-screen w-full flex flex-col justify-center items-center py-16 bg-opacity-50 dark:bg-opacity-50"
    @click.self="$emit(`close`)"
  >
    <button
      class="bg-gray-300 dark:bg-gray5 focus:outline-none mb-5 rounded-full p-1 w-8 h-8"
      @click="$emit(`close`)"
    >
      <XIcon class="w-6 h-6" />
    </button>
    <img
      :src="props.image"
      alt=""
      srcset=""
      class="modal-content rounded-lg overflow-hidden object-contain m-0 p-0"
    />
  </div>
</template>
