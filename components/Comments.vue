<template>
  <div class="mx-auto text-center w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12">
    <section class="mb-10">
      <h1 class="mt-8 mb-4 text-4xl hand-lettering text-accent-300">
        Kirimkan Doa & Ucapan Untuk Kedua Mempelai
      </h1>

      <form class="">
        <div class="mb-4 bg-white shadow-md rounded">
          <input
            id="nama"
            class="
              appearance-none
              border
              rounded
              w-full
              py-4
              px-3
              text-gray-700
              leading-tight
              focus:outline-none focus:shadow-outline
              text-sm
            "
            type="text"
            placeholder="Nama"
          />
        </div>
        <div class="mb-4 bg-white shadow-md rounded">
          <textarea
            id="pesan"
            rows="4"
            class="
              w-full
              appearance-none
              rounded
              py-4
              px-3
              text-gray-700
              leading-tight
              text-sm
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Berikan Ucapan & Doa Untuk kedua mempelai"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            id="kirim-pesan"
            class="
              block
              mx-auto
              px-6
              py-1
              border
              shadow-md
              rounded-full
              border-[#BF7E62]
              bg-[#BF7E62]
              hover:bg-transparent
              font-medium
              hover:font-semibold
              text-base text-white
              hover:text-[#BF7E62]
            "
            type="button"
          >
            Kirim Ucapan
          </button>
        </div>
      </form>
    </section>

    <section class="w-full mx-auto rounded-md">
      <div
        class="
          px-6
          py-3
          mt-4
          overflow-y-auto
          bg-white
          rounded-md
          shadow-xl
          max-h-[650px]
        "
      >
        <div
          v-for="(item, index) in comments"
          :key="index"
          :v-bind="item"
          :v-key="index"
          class="block py-1 my-2 text-left"
        >
          <h3 class="text-2xl text-[#884936] second-accent">
            {{ item.nama ? item.nama : 'Anonim' }}
            <span class="text-xs text-accent-300 second-accent">
              {{ item.date }}
            </span>
          </h3>
          <p class="text-base text-accent-400 second-accent">
            {{ item.comment }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'CommentContainer',
  data() {
    return {
      comments: [],
    }
  },
  async fetch() {
    this.comments = await this.getComments()
    console.log(this.comments)
  },
  methods: {
    async getComments() {
      const request = await this.$axios.get(
        'https://bejuju.herokuapp.com/api/master/comment'
      )
      const response = await request.data.data
      return response
    },
  },
})
</script>

<style>
</style>