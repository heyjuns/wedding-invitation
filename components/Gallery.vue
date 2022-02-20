<template>
  <section
    class="mx-auto text-center mb-12 w-10/12 md:w-9/12 lg:w-8/12 xl:w-6/12"
  >
    <div class="">
      <h1 class="my-8 text-4xl hand-lettering text-accent-300">Gallery</h1>
      <div class="container mx-auto">
        <div
          class="
            grid-cols-3
            space-y-2
            lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3
          "
        >
          <div class="w-full">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0027.JPG"
              alt="image"
            />
          </div>
          <div class="w-full col-span-2 row-span-2">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0340.JPG"
              alt="image"
            />
          </div>
          <div class="w-full">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0189.JPG"
              alt="image"
            />
          </div>

          <div class="w-full col-span-2 row-span-2">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0002.JPG"
              alt="image"
            />
          </div>
          <div class="w-full">
            <img
              class="aspect-square object-cover object-top"
              src="~assets/IMG_0375.JPG"
              alt="image"
            />
          </div>
          <div class="w-full">
            <img
              class="aspect-square object-cover object-top"
              src="~assets/IMG_0349.JPG"
              alt="image"
            />
          </div>

          <!-- <div class="w-full rounded">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0291.JPG"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0136.JPG"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              class="aspect-square object-cover"
              src="~assets/IMG_0350.JPG"
              alt="image"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div
      class="
        flex
        items-center
        mx-auto
        mt-4
        mb-8
        justify-center
        shadow-2xl
        bg-white
        rounded-xl
      "
    >
      <iframe
        class="w-full aspect-video p-3"
        src="https://www.youtube.com/embed/Bh7WGBB-y3c"
        title="YouTube video player"
        loading="lazy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<script>
export default {
  name: 'GalleryContainer',
}
</script>

<style>
</style>