<template>
  <section
    class="
      flex
      h-screen
      m-auto
      bg-[url('~assets/bg-home.webp')] bg-top bg-cover bg-no-repeat
    "
  >
    <div
      class="
        shadow-xl
        px-10
        py-5
        mt-8
        md:my-auto
        m-auto
        flex flex-col
        items-center
        justify-center
        bg-background-tint
        rounded-2xl
        text-center
      "
    >
      <img
        src="~assets/berdua.webp"
        class="block mx-auto rounded-full mb-4 w-40 aspect-square lg:w-72"
        alt=""
      />
      <p class="text-sm lg:text-lg text-accent-200">Undangan Pernikahan</p>
      <h1 class="my-2 hand-lettering text-5xl lg:text-7xl text-accent-100 leading-10">
        Prien
        <span class="block sm:inline hand-lettering leading-none">&</span>
        Juanda
      </h1>
      <p class="text-lg lg:text-xl font-medium text-accent-100">05.03.2022</p>
      <button
        class="
          mx-auto
          block
          py-2
          px-5
          m-3
          font-medium
          shadow-md
          text-white
          rounded-full
          text-base
          lg:text-xl
          bg-[#884936]
          hover:bg-[#945b4a]
        "
        @click="close"
      >
        Buka Undangan
      </button>
      <div class="grid grid-cols-4 gap-1">
        <div class="bg-white rounded-2xl p-2 md:p-4">
          <img
            class="block mx-auto w-8"
            src="~/assets/Frameprokes.png"
            alt=""
          />
        </div>
        <div class="bg-white rounded-2xl p-2 md:p-4">
          <img
            class="block mx-auto w-8"
            src="~/assets/Frameprokes-1.png"
            alt=""
          />
        </div>
        <div class="bg-white rounded-2xl p-2 md:p-4">
          <img
            class="block mx-auto w-8"
            src="~/assets/Frameprokes-2.png"
            alt=""
          />
        </div>
        <div class="bg-white rounded-2xl p-2 md:p-4">
          <img
            class="block mx-auto w-8"
            src="~/assets/Frameprokes-3.png"
            alt=""
          />
        </div>
      </div>
      <p class="text-gray-500 italic text-xs mt-2">
        Tetap mentaati protokol kesehatan
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'WelcomeJumbotron',
  methods: {
    close() {
      this.$emit('close')
    },
  },
})
</script>
<style>
.hand-lettering {
  font-family: 'Cormorant Upright', sans-serif;
}
</style>