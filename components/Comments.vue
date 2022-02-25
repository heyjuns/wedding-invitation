<template>
  <div class="mx-auto mb-6 text-center w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12">
    <section class="mb-10">
      <h1 class="mt-8 mb-4 text-4xl hand-lettering text-accent-300">
        Kirimkan Doa & Ucapan Untuk Kedua Mempelai
      </h1>

      <form class="">
        <div class="mb-4 bg-white shadow-md rounded">
          <input
            id="nama"
            v-model="body.name"
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
            v-model="body.comment"
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
        <button
          id="kirim-pesan"
          class="
            block
            mx-auto
            px-6
            py-2
            rounded-full
            font-medium
            text-base text-white
            bg-[#BF7E62]
            hover:bg-[#c58b72] hover:border-[#c58b72]
          "
          type="button"
          @click="postComments"
        >
          Kirim Ucapan
        </button>
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
        <div v-if="comments.length === 0" class="p-4">
          <h3 class="text-2xl text-[#884936] second-accent">
            Belum ada doa dan ucapan dari tamu
          </h3>
        </div>
        <div
          v-for="(item, index) in comments"
          :key="index"
          :v-bind="item"
          :v-key="index"
          class="block py-1 my-2 text-left"
        >
          <h3 class="text-2xl text-[#884936] second-accent">
            {{ item.name ? item.name : 'Anonim' }}
            <span class="text-xs text-accent-300 block md:inline second-accent">
              {{ item.created_date }}
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
      body: {
        name: this.$route.query.to ? this.$route.query.to : '',
        comment: '',
      },
      comments: [],
    }
  },
  async fetch() {
    await this.getComments()
  },
  methods: {
    async getComments() {
      const request = await this.$axios.get(
        'https://bejuju.herokuapp.com/api/master/comment'
      )
      const response = await request.data.data
      this.comments = response
    },
    async postComments() {
      const { name, comment } = this.body
      const body = { name, comment }
      const request = await this.$axios.post(
        'https://bejuju.herokuapp.com/api/master/comment',
        body
      )
      const response = await request.data

      if (response.status === true) {
        this.getComments()
        this.body = {
          name: '',
          comment: '',
        }
      }
    },
  },
})
</script>

<style>
</style>