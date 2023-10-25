<script lang="ts" setup>
const menuItems = [
  {
    id: 1,
    name: "Illustration",
    link: "/",
  },
  {
    id: 2,
    name: "Blog",
    link: "/blog",
  },
  {
    id: 12,
    name: "Kennisbank",
    link: "/kennisbank",
  },
  {
    id: 21,
    name: "Inspiratie",
    link: "/inspiratie",
  },
  // {
  //   id: 2,
  //   name: "Sketchbook",
  //   link: "/sketchbook",
  // },
  // {
  //   id: 3,
  //   name: "Timeline",
  //   link: "/timeline",
  // },
  // {
  //   id: 4,
  //   name: "About",
  //   link: "/about",
  // },
  // {
  //   id: 5,
  //   name: "Contact",
  //   link: "/contact",
  // },
];
const toggleMenu = ref(false);
</script>

<template>
  <div class="bg-slate-400 p-2">
    <div class="rounded-3xl min-h-full overflow-hidden bg-primary">
      <transition name="slide">
        <div
          v-if="toggleMenu"
          class="bg-secondary fixed z-30 left-0 top-2 rounded-r-3xl w-[75vw] h-[calc(100vh-16px)] px-4 py-8"
        >
          <nav>
            <ul class="flex flex-col gap-3">
              <li v-for="menu of menuItems">
                <NuxtLink
                  @click="toggleMenu = false"
                  class="block py-4 px-4 !text-white rounded md:bg-transparent md:text-slate-600 md:p-0 dark:text-white text-2xl font-baloo"
                  :to="menu.link"
                  >{{ menu.name }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
        </div>
      </transition>
      <header
        class="bg-primary h-auto fixed rounded-t-3xl w-[calc(100%-1rem)] left-2"
      >
        <div
          class="absolute w-[calc(100vw+50px)] -left-2 h-8 bg-slate-400 -top-8 pointer-events-none"
        ></div>
        <div
          class="gradient absolute w-full pointer-events-none h-5 -bottom-5"
        ></div>
        <nav
          class="relative border-gray-200 dark:bg-gray-900 !bg-transparent w-full z-20"
        >
          <div
            class="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-8 py-8 lg:py-12"
          >
            <a href="/" class="flex items-center">
              <img src="/images/logo.svg" class="h-8 mr-3" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              @click="toggleMenu = !toggleMenu"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul
                id="main-menu"
                class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700"
              >
                <li v-for="menu of menuItems">
                  <NuxtLink
                    class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 dark:text-white font-baloo text-lg"
                    :to="menu.link"
                    >{{ menu.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div class="pt-36">
        <NuxtPage />
      </div>

      <div class="bg-dark">
        <div class="max-w-7xl mx-auto px-8 py-12">
          <div class="text-center text-slate-400">
            Copyright © 2023 Digitabart.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.router-link-exact-active {
  color: #1e293b;
}
</style>
