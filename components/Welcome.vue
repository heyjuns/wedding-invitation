<template>
  <div class="flex items-center justify-center h-screen bg-[#F7F3F1]">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center">
        <p class="text-xl lg:text-2xl font-medium mb-7 text-gray-800">Undangan Pernikahan</p>
        <p class="hand-lettering text-3xl lg:text-9xl text-[#BD3A3A] my-2">
          Juanda & Prien
        </p>
        <p class="text-xl lg:text-2xl font-medium mt-7 mb-32 text-gray-800">05.03.2022</p>

        <button
          class="
            mt-12
            py-2
            px-5
            font-medium
            rounded-lg
            shadow-md
            text-white
            bg-[#BD3A3A]
            hover:bg-[#ca6161]
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