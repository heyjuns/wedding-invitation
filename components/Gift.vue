<template>
  <section class="flex">
    <div class="m-auto py-8 text-white w-full bg-[#BF7E62] rounded-b-2xl">
      <h1
        class="
          pb-8
          px-8
          text-4xl
          hand-lettering
          text-center text-white
          hand-lettering
        "
      >
        Hadiah Pernikahan
      </h1>
      <div
        class="
          bg-white
          w-10/12
          md:w-9/12
          lg:w-8/12
          xl:w-6/12
          text-accent-400
          p-4
          text-center
          rounded-2xl
          mx-auto
          text-xs
          md:text-sm
        "
      >
        <div class="w-full p-2 mx-auto space-y-4">
          <p>
            Tanpa mengurangi rasa hormat, bagi keluarga, sahabat, dan rekan yang
            ingin memberikan tanda kasih untuk kami, dapat melalui:
          </p>
          <div>
            <img src="~assets/bca.svg" class="block mx-auto w-28" alt="" />
            <h1 class="font-semibold text-xl">6042158450</h1>
            <p class="text-base font-medium">Prien Novita Ayu</p>
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