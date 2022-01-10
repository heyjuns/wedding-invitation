<template>
  <div class="flex h-screen bg-[#f7f3f1]">
    <div class="m-auto">
      <div class="text-center">
        <p class="text-md sm:text-lg md:text-xl text-gray-800">
          Undangan Pernikahan
        </p>
        <p
          class="
            hand-lettering
            text-5xl
            my-3
            sm:text-7xl sm:my-5
            md:text-8xl md:my-7
            xl:text-9xl
            text-medium-carmine-0
          "
        >
          Juanda & Prien
        </p>
        <p
          class="
            text-sm
            mb-24
            md:text-lg
            xl:text-2xl
            md:mb-32
            font-medium
            text-gray-800
          "
        >
          05.03.2022
        </p>

        <button
          class="
            py-2
            px-5
            font-medium
            rounded-lg
            shadow-md
            text-white
            bg-medium-carmine-0
            hover:bg-medium-carmine-200
          "
        >
          Buka Undangan
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'WelcomeJumbotron',
})
</script>
<style>
.hand-lettering {
  font-family: 'Cormorant Upright', sans-serif;
}
</style>