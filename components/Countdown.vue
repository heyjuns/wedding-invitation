<template>
  <section
    id="countdown-time"
    class="mx-auto block py-5 px-4 md:p-8 lg:w-[768px]"
  >
    <div class="grid gap-1 md:gap-2 lg:gap-4 grid-cols-4">
      <div class="countdown-time">
        <h1 class="countdown-remain">{{ days }}</h1>
        <p class="countdown-title">Hari</p>
      </div>
      <div class="countdown-time">
        <h1 class="countdown-remain">{{ hours }}</h1>
        <p class="countdown-title">Jam</p>
      </div>
      <div class="countdown-time">
        <h1 class="countdown-remain">{{ minutes }}</h1>
        <p class="countdown-title">Menit</p>
      </div>
      <div class="countdown-time">
        <h1 class="countdown-remain">{{ seconds }}</h1>
        <p class="countdown-title">Detik</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CountdownTime',
  props: {
    endtime: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      timer: '',
      start: '',
      end: '',
      interval: Object(),
      days: '',
      minutes: '',
      hours: '',
      seconds: '',
    }
  },
  created() {},
  mounted() {
    this.start = new Date().getTime().toString()
    this.end = new Date(this.endtime).getTime().toString()
    // Update the count down every 1 second
    this.timerCount(this.start, this.end)
    this.interval = setInterval(() => {
      this.timerCount(this.start, this.end)
    }, 1000)
  },
  methods: {
    timerCount(start: String, end: String) {
      // Get todays date and time
      const now = new Date().getTime()

      // Find the distance between now an the count down date
      const distance = +start - now
      const passTime = +end - now

      if (distance < 0 && passTime < 0) {
        clearInterval(this.interval)
      } else if (distance < 0 && passTime > 0) {
        this.calcTime(passTime)
      } else if (distance > 0 && passTime > 0) {
        this.calcTime(distance)
      }
    },
    calcTime(dist: number) {
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(dist / (1000 * 60 * 60 * 24)).toString()
      this.hours = Math.floor(
        (dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ).toString()
      this.minutes = Math.floor(
        (dist % (1000 * 60 * 60)) / (1000 * 60)
      ).toString()
      this.seconds = Math.floor((dist % (1000 * 60)) / 1000).toString()
    },
  },
})
</script>
<style>
</style>