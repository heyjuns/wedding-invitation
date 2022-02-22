<template>
  <!--Play on Click Component-->
  <div class="text-center py-20">
    <button
      class="text-2xl rounded px-8 py-2 bg-green-400 hover:bg-green-500"
      @click="playNotification"
    >
      Play Me
    </button>
  </div>
</template>
<script>
const notificationSound = require('@/assets/bg-sound.mp3').default
export default {
  name: 'AudioContainer',
  data() {
    return {
      // same as notificationSound: notificationSound,
      notificationSound,
    }
  },
  methods: {
    playNotification() {
      const audio = new Audio(this.notificationSound)
      audio.volume = 0.1;
      audio.play()

      console.log(audio)
    },
  },
}
</script>
<style scoped>
</style>