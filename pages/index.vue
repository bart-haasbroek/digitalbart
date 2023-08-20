<script lang="ts" setup>
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
    src: "/images/Untitled_Artwork 11.jpg",
  },
  {
    id: 12,
    src: "/images/Untitled_Artwork 12.jpg",
  },
  {
    id: 13,
    src: "/images/Untitled_Artwork 13.jpg",
  },
  {
    id: 14,
    src: "/images/Untitled_Artwork 14.jpg",
  },
  {
    id: 15,
    src: "/images/Untitled_Artwork 15.jpg",
  },
  {
    id: 16,
    src: "/images/Untitled_Artwork 16.jpg",
  },
  {
    id: 17,
    src: "/images/Untitled_Artwork 17.jpg",
  },
].reverse();
</script>

<template>
  <div class="max-w-7xl mx-auto px-5 lg:px-8 pb-5 lg:pb-12">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
      <div
        v-for="image of images"
        class="aspect-square bg-blue-200 border border-slate-200 rounded-xl overflow-hidden"
      >
        <img :src="image.src" alt="" />
      </div>
    </div>
  </div>
</template>
