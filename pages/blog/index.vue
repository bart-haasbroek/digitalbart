<script setup lang="ts">
useSeoMeta({
  title: "My Amazing Site123",
  description: "This is my amazing site, let me tell you all about it.",
});
</script>

<template>
  <div
    class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
  >
    <ContentList path="/blog" v-slot="{ list }">
      <div
        v-for="article in list"
        :key="article._path"
        class="bg-white rounded-xl overflow-hidden"
      >
        <NuxtLink
          :to="article._path"
          class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
        >
          <NuxtImg
            class="object-cover w-full h-44 bg-gray-500"
            :src="article.featureImage.url"
          />
          <!-- <img
              role="presentation"
              class="object-cover w-full h-44 bg-gray-500"
              :src="article.featureImage.url"
            /> -->
          <div class="p-6 space-y-2">
            <h3
              class="text-2xl font-semibold group-hover:underline group-focus:underline"
            >
              {{ article.title }}
            </h3>
            <span class="text-xs text-gray-400">
              {{ article.publishDate }}
            </span>
            <p>
              {{ article.summary }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </ContentList>
  </div>
</template>
