// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true,
  devtools: { enabled: true },
  css: ["@/assets/main.css"],
  modules: ["@nuxt/content", "@pinia/nuxt", '@nuxt/image'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: ['source.unsplash.com'],
  },
});
