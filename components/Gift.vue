<template>
  <section
    class="flex m-auto  text-white w-full"
  >
    <div class="mx-auto space-y-4 w-[768px]">
      <div class="mx-auto text-center">
        <h1
          class="text-4xl p-3 hand-lettering text-center text-white hand-lettering"
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
                <p class="text-sm font-semibold">
                  6042158450

                  <button
                    @click="copyToClipboard('Amplop Digital', '6042158450')"
                  >
                    <span>
                      <img
                        class="w-4"
                        src="~assets/content_copy_black_24dp.svg"
                        alt=""
                      />
                    </span>
                  </button>
                </p>
                <p class="text-sm font-medium">Prien Novita Ayu Cahyaningrum</p>
              </div>
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

                  <button
                    class="w-4"
                    @click="
                      copyToClipboard(
                        'Alamat Kirim Hadiah',
                        'Jl . Gurame 1 No. 20 RT 03/03 Pd Permai Kutabaru Tangerang'
                      )
                    "
                  >
                    <span>
                      <img
                        class="inline"
                        src="~assets/content_copy_black_24dp.svg"
                        alt=""
                      />
                    </span>
                  </button>
                </p>
              </div>
            </div>
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
    async copyToClipboard(tipe: string, value: string) {
      await navigator.clipboard.writeText(value)
      await this.$toast.show(`${tipe} berhasil di salin`).goAway(2000)
    },
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