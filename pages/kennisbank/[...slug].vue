<script setup>
const { path } = useRoute();
console.log("path", path);
const current = await queryContent("kennisbank").where({ _path: path }).findOne();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent("kennisbank")
    .where({
      _path: { $ne: path },
      categories2: { $in: current.categories2 },
    })
    .limit(4)
    .find();
});
</script>

<template>
  <div class="max-w-7xl mx-auto px-8 pb-5">
    <ContentDoc>
      <template #default="{ doc }">
        <div class="w-full h-96 rounded-2xl overflow-hidden">
          <img
            class="w-full h-full object-cover"
            :src="doc.featureImage.url"
            alt=""
          />
        </div>
        <div class="prose mx-auto">
          <div class="nuxt-content col-span-8 bg-white rounded-2xl p-5 mt-5">
            <ContentRenderer ref="nuxtContent" :value="doc" />
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>

  <div class="max-w-7xl mx-auto px-8 pb-16" v-if="data.length">
    <div class="my-8 text-3xl text-center">Meer artikelen</div>
    <div
      class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div
        v-for="article in data"
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
    </div>
  </div>
</template>
