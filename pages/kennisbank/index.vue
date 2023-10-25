<script setup lang="ts"></script>

<template>
  <div class="max-w-7xl mx-auto px-8 pb-5">
    <div
      class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <ContentList path="/kennisbank" v-slot="{ list }">
        <div
          v-for="article in list"
          :key="article._path"
          class="bg-white rounded-xl overflow-hidden"
        >
          <NuxtLink
            :to="article._path"
            class="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900"
          >
            <img
              role="presentation"
              class="object-cover w-full h-44 bg-gray-500"
              :src="article.featureImage.url"
            />
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
  </div>
</template>
