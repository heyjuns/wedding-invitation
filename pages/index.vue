<template>
  <div>
    <Welcome />
    <div class="py-20 bg-[url('assets/dark-brown-paper-texture-background.png')]">
      <invitation />
      <location />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Invitation from '~/components/Invitation.vue'
import Location from '~/components/Location.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { Invitation, Location },
})
</script>
<style>
* {
  font-family: 'Poppins', sans-serif;
}
</style>