<script setup>
import { defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  userAnswer: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

onMounted(() => {
  const modalElement = document.getElementById('exampleModal')

  modalElement.addEventListener('hidden.bs.modal', handleClose)
})

onBeforeUnmount(() => {
  const modalElement = document.getElementById('exampleModal')

  modalElement.removeEventListener('hidden.bs.modal', handleClose)
})
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Your answer</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">{{ userAnswer }}</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary px-4 py-2 py-xxl-3 rounded-5 text-uppercase fw-bold"
            data-bs-dismiss="modal"
            @click="handleClose"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal .btn {
  font-size: 15px;
}
</style>
