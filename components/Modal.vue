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
            <Welcome @close="close" />
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