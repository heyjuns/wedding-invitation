<template>
  <div>
    <Welcome />
    <div
      class="pt-20 pb-4 bg-[url('assets/dark-brown-paper-texture-background.png')]"
    >
      <Invitation />
      <Location />
      <Pray />
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

export default Vue.extend({
  name: 'PageIndex',
  components: { Invitation, Location, Pray, Footer },
})
</script>
<style>
* {
  font-family: 'Poppins', sans-serif;
}
</style>