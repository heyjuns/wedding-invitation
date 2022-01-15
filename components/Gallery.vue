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
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full col-span-2 row-span-2 rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div class="w-full rounded">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
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