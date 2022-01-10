<template>
  <div>
    <Welcome />
    <invitation />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Invitation from '~/components/Invitation.vue'

export default Vue.extend({
  name: 'PageIndex',
  components: { Invitation },
})
</script>
<style>
* {
  font-family: 'Poppins', sans-serif;
}
</style>