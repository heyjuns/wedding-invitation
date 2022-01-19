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
          md:p-8
          text-center
          rounded-2xl
          mx-auto
          text-xs
          md:text-sm
        "
      >
        <div class="w-full p-3 mx-auto space-y-4">
          <p>
            Terima kasih telah ikut berbahagia bersama kami Do'a Restu Anda
            merupakan karunia yang sangat berarti bagi kami. Dan jika memberi
            adalah ungkapan tanda kasih, Anda dapat memberikan hadiah secara
            cashless melalui rekening/e-wallet berikut
          </p>
          <div>
            <img
              src="~assets/bca.svg"
              class="block mx-auto w-full max-w-[250px]"
              alt=""
            />
            <h1 class="font-semibold text-xl">7235083779</h1>
            <p class="text-base font-medium">a/n Prien Novita Ayu</p>
          </div>

          <p>
            Sebelumnya, kami ucapkan terima kasih atas perhatian dan bentuk
            tanda cinta Bapak/Ibu/Saudara/i untuk kami
          </p>
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