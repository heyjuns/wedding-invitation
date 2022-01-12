<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <section id="modalDescription" class="modal-body">
          <slot name="body">
            <div class="flex h-screen bg-[#f7f3f1]">
              <div class="m-auto">
                <div class="text-center">
                  <p class="text-md sm:text-lg md:text-xl text-gray-800">
                    Undangan Pernikahan
                  </p>
                  <p
                    class="
                      hand-lettering
                      text-5xl
                      my-3
                      sm:text-7xl sm:my-5
                      md:text-8xl md:my-7
                      xl:text-9xl
                      text-medium-carmine-0
                    "
                  >
                    Juanda & Prien
                  </p>
                  <p
                    class="
                      text-sm
                      mb-24
                      md:text-lg
                      xl:text-2xl
                      md:mb-32
                      font-medium
                      text-gray-800
                    "
                  >
                    05.03.2022
                  </p>

                  <button
                    class="
                      py-2
                      px-5
                      font-medium
                      rounded-lg
                      shadow-md
                      text-white
                      bg-medium-carmine-0
                      hover:bg-medium-carmine-200
                    "
                    @click="close"
                  >
                    Buka Undangan
                  </button>
                </div>
              </div>
            </div>
          </slot>
        </section>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'ModalWelcome',
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
<style>
.modal-backdrop {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-body {
  position: relative;
}
</style>