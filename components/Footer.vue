<template>
  <div class="text-center bottom-0 mt-8">
    <p class="text-gray-200 text-xs tracking-wider">
      made with <img class="inline w-3" src="~assets/heart.png" alt="" />
      | exclusive design by
      <span class="font-medium text-white"
        ><a
          href="https://www.instagram.com/davidnovrian7/"
          target="_blank"
          rel="noreferrer"
          noopener
        >
          david novrian</a
        ></span
      >
      | Shoutout to
      <span class="font-medium text-white">
        <a
          href="https://www.instagram.com/deny_angg/"
          target="_blank"
          rel="noreferrer"
          noopener
        >
          deny anggriawan</a>
          </span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'FooterComponent',
})
</script>

<style>
.hand-lettering {
  font-family: 'Cormorant Upright', sans-serif;
}
</style>