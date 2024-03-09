<script lang="ts" setup>
import { onMounted } from "vue";
const images = [
  {
    id: 1,
    src: "/images/Untitled_Artwork.jpg",
  },
  {
    id: 2,
    src: "/images/Untitled_Artwork_2.jpg",
  },
  {
    id: 3,
    src: "/images/Untitled_Artwork_3.jpg",
  },
  {
    id: 4,
    src: "/images/Untitled_Artwork_4.jpg",
  },
  {
    id: 5,
    src: "/images/Untitled_Artwork_5.jpg",
  },
  {
    id: 6,
    src: "/images/Untitled_Artwork_6.jpg",
  },
  {
    id: 7,
    src: "/images/Untitled_Artwork_7.jpg",
  },
  {
    id: 8,
    src: "/images/Untitled_Artwork_8.jpg",
  },
  {
    id: 9,
    src: "/images/Untitled_Artwork_9.jpg",
  },
  {
    id: 10,
    src: "/images/Untitled_Artwork_10.jpg",
  },
  {
    id: 11,
    src: "/images/Untitled_Artwork_11.jpg",
  },
  {
    id: 12,
    src: "/images/Untitled_Artwork_12.jpg",
  },
  {
    id: 13,
    src: "/images/Untitled_Artwork_13.jpg",
  },
  {
    id: 14,
    src: "/images/Untitled_Artwork_14.jpg",
  },
  {
    id: 15,
    src: "/images/Untitled_Artwork_15.jpg",
  },
  {
    id: 16,
    src: "/images/Untitled_Artwork_16.jpg",
  },
  {
    id: 17,
    src: "/images/Untitled_Artwork_17.jpg",
  },
].reverse();

import Lightgallery from "lightgallery/vue/LightGalleryVue.umd.js";

const index: any = ref(null);
</script>

<template>
  <div>
    <!-- <Lightgallery class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
      <div
        v-for="image of images"
        :data-src="image.src"
        class="aspect-square bg-transparent cursor-pointer group perspective"
      >
        <div
          class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000"
        >
          <div
            class="absolute backface-hidden w-full h-full rounded-xl overflow-hidden"
          >
            <NuxtImg class="img-responsive" :src="image.src" />
          </div>
          <div
            class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-xl"
          >
            <div
              class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24"
            >
              <h1 class="text-3xl font-semibold">The King's Man</h1>
              <p class="my-2">9.0 Rating</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                itaque assumenda saepe animi maxime libero non quasi, odit natus
                veritatis enim culpa nam inventore doloribus quidem temporibus
                amet velit accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Lightgallery> -->

    <Lightgallery class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
      <a
        v-for="image of images"
        :data-src="image.src"
        class="block aspect-square bg-blue-200 border border-slate-200 rounded-xl overflow-hidden"
      >
        <NuxtImg class="img-responsive" :src="image.src" />
      </a>
    </Lightgallery>
  </div>
</template>
