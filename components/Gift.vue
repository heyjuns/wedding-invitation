<template>
  <section
    class="flex m-auto py-4 px-8 text-white w-full bg-[#BF7E62] rounded-b-2xl"
  >
    <div class="mx-auto space-y-4 w-[768px]">
      <div class="mx-auto text-center">
        <h1
          class="text-4xl hand-lettering text-center text-white hand-lettering"
        >
          Hadiah Pernikahan
        </h1>
        <p>
          Tanpa mengurangi rasa hormat, bagi keluarga, sahabat, dan rekan yang
          ingin memberikan tanda kasih untuk kami, dapat melalui:
        </p>
      </div>

      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2">
        <div
          class="
            bg-white
            text-accent-400
            p-4
            text-center
            rounded-2xl
            text-xs
            md:text-sm
          "
        >
          <div class="w-full space-y-2 px-4">
            <img src="~assets/bca.svg" class="h-14 mx-auto" alt="" />
            <div class="m-auto space-y-1">
              <h1 class="font-semibold text-base">Amplop Digital</h1>
              <div>
                <p class="text-sm font-semibold">6042158450</p>
                <p class="text-sm font-medium">Prien Novita Ayu Cahyaningrum</p>
              </div>
              <button class="p-2" @click="copyToClipboard('6042158450')">
                <span>
                  <img
                    class="inline w-5"
                    src="~assets/content_copy_black_24dp.svg"
                    alt=""
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div
          class="
            bg-white
            text-accent-400
            p-4
            text-center
            rounded-2xl
            text-xs
            md:text-sm
          "
        >
          <div class="w-full space-y-2 px-4">
            <img src="~assets/gift.png" class="w-14 mx-auto" alt="" />
            <div class="m-auto space-y-1">
              <h1 class="font-semibold text-base">Kirim Hadiah</h1>
              <div>
                <p class="text-sm font-medium">
                  Jl . Gurame 1 No. 20 RT 03/03 Pd Permai Kutabaru Tangerang
                </p>
              </div>
            </div>

            <button
              class="p-2"
              @click="
                copyToClipboard(
                  'Jl . Gurame 1 No. 20 RT 03/03 Pd Permai Kutabaru Tangerang'
                )
              "
            >
              <span>
                <img
                  class="inline w-5"
                  src="~assets/content_copy_black_24dp.svg"
                  alt=""
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'GiftContainer',
  methods: {
    async copyToClipboard(teks: string) {
      await navigator.clipboard.writeText(teks)
      await this.$toast.info('Salin ke clipboard berhasil').goAway(2000)
    },
    // async copySomething(text: string) {
    //   try {
    //     await this.$copyText(text)
    //   } catch (e) {
    //     console.error(e)
    //   }
    // },
  },
})
</script>
<style>
@supports not (aspect-ratio: 1 / 1) {
  .aspect-square::before {
    float: left;
    padding-top: 8px;
    content: '';
  }

  .aspect-square:after {
    display: block;
    content: '';
    padding-bottom: 8px;
    clear: both;
  }
}
</style>