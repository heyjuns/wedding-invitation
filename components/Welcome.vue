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
        flex flex-col
        items-center
        justify-center
        m-auto
        bg-background-tint
        rounded-2xl
        text-center
        space-y-2
        md:space-y-4
      "
    >
      <div>
        <img
          src="~assets/highlight.webp"
          class="block mx-auto rounded-full mb-4 w-36 aspect-square lg:w-72"
          alt=""
        />
        <!-- <p class="text-sm lg:text-lg text-accent-200">Undangan Pernikahan</p> -->
        <h1
          class="
            my-2
            hand-lettering
            text-5xl
            lg:text-7xl
            text-accent-100
            leading-8
          "
        >
          Prien
          <span class="block sm:inline hand-lettering leading-none">&</span>
          Juanda
        </h1>
        <p class="text-lg lg:text-xl font-medium text-accent-100">05.03.2022</p>
        <button
          class="
            block
            mx-auto
            text-sm text-white
            px-5
            py-2
            my-3
            sm:px-6 sm:py-2 sm:my-4 sm:text-base
            shadow-md
            rounded-full
            font-medium
            bg-[#884936]
            hover:bg-[#945b4a]
          "
          @click="close"
        >
          Buka Undangan
        </button>
      </div>

      <div v-if="$route.query.to !== undefined" class="space-y-3">
        <p class="text-base">Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <p class="font-semibold text-lg text-[#945b4a]">
          {{ $route.query.to }}
        </p>
      </div>

      <div id="prokes">
        <div class="grid grid-cols-4 gap-1">
          <div class="bg-white rounded-2xl p-2">
            <img
              class="block mx-auto w-6"
              src="~/assets/Frameprokes.png"
              alt=""
            />
          </div>
          <div class="bg-white rounded-2xl p-2">
            <img
              class="block mx-auto w-6"
              src="~/assets/Frameprokes-1.png"
              alt=""
            />
          </div>
          <div class="bg-white rounded-2xl p-2">
            <img
              class="block mx-auto w-6"
              src="~/assets/Frameprokes-2.png"
              alt=""
            />
          </div>
          <div class="bg-white rounded-2xl p-2">
            <img
              class="block mx-auto w-6"
              src="~/assets/Frameprokes-3.png"
              alt=""
            />
          </div>
        </div>
        <p class="text-gray-500 italic text-xs mt-2">
          Tetap mentaati protokol kesehatan
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
const notificationSound = require('@/assets/bg-sound.mp3').default
export default Vue.extend({
  name: 'WelcomeJumbotron',
  data() {
    return {
      // same as notificationSound: notificationSound,
      notificationSound,
    }
  },
  created() {
    console.log(this.$route.query.to)
  },
  methods: {
    close() {
      this.playNotification()
      this.$emit('close')
    },
    playNotification() {
      const audio = new Audio(this.notificationSound)
      audio.volume = 0.05
      audio.preload = 'auto'

      audio.play()
    },
  },
})
</script>
<style>
.hand-lettering {
  font-family: 'Cormorant Upright', sans-serif;
}
</style>