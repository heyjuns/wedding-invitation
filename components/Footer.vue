<template>
  <div class="text-center bottom-0 mt-8">
    <p class="text-gray-200 text-xs tracking-wider">
      made with
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 text-red-500 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clip-rule="evenodd"
        />
      </svg>
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
      | shoutout to
      <span class="font-medium text-white">
        <a
          href="https://www.instagram.com/deny_angg/"
          target="_blank"
          rel="noreferrer"
          noopener
        >
          deny anggriawan</a
        >
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