<template>
  <div>
    <Modal v-show="isModalVisible" @close="closeModal"> </Modal>
    <div
      class="
        py-6
        px-4
        lg:pt-10
        bg-[url('assets/dark-brown-paper-texture-background.webp')]
      "
    >
      <div class="w-full md:w-10/12 mx-auto">
        <Invitation />
        <Location />
        <Pray />
        <Gift />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Invitation from '~/components/Invitation.vue'
import Location from '~/components/Location.vue'
import Pray from '~/components/Pray.vue'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/Modal.vue'
import Gift from '~/components/Gift.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { Invitation, Location, Pray, Footer, Modal, Gift },
  data() {
    return {
      isModalVisible: true,
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
  },
})
</script>
<style>
* {
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}
</style>