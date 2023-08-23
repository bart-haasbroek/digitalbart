<script lang="ts" setup>
import { WordList } from "../data/words";
import { onMounted } from "vue";

const wordCategorie = ref("random");
// const activeWordlist = ref(WordList[wordCategorie.value]);
const activeWordlist = computed(() => {
  return WordList[wordCategorie.value];
});

function getRandomFromArray(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const word = ref(activeWordlist[0]);

function nextWord() {
  word.value = getRandomFromArray(activeWordlist.value);
}

function changeCategory(category: string) {
  wordCategorie.value = category;
  nextWord();
}

onMounted(() => {
  nextWord();
});

const categories = [
  {
    name: "random",
    label: "Random",
  },
  {
    name: "furniture",
    label: "Meubels",
  },
  {
    name: "clothing",
    label: "Kleding",
  },
];
</script>

<template>
  <div class="max-w-7xl mx-auto px-8 pb-5">
    <div>
      Categorien:
      <div class="flex mt-2 gap-4">
        <button
          v-for="category in categories"
          @click="changeCategory(category.name)"
          class="border border-dark border-style-solid rounded-md p-2"
          :class="{
            'bg-dark text-white': wordCategorie === category.name,
            'text-dark': wordCategorie !== category.name,
          }"
        >
          {{ category.label }}
        </button>
      </div>
    </div>
    <div class="flex justify-center my-8">
      <div
        class="bg-white rounded-2xl aspect-square flex items-center justify-center text-3xl p-8 h-72 text-center"
      >
        {{ word }}
      </div>
    </div>
    <div class="text-center">
      <button @click="nextWord" class="bg-dark text-white rounded-md p-4">
        Volgend woord
      </button>
    </div>
  </div>
</template>
