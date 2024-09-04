<script setup>
import { ref, onMounted } from 'vue'

import Header from '@/components/Header.vue'
import ScrollableCards from '@/components/ScrollableCards.vue'
import Modal from '@/components/Modal.vue'

const userAnswer = ref('')

const handleCloseModal = () => {
  userAnswer.value = ''
}
</script>

<template>
  <div class="bg-white">
    <Header />

    <main>
      <section class="hero py-3 py-sm-5">
        <h1
          class="hero__title d-flex mb-3 mb-sm-5 flex-column display-1 fw-bold"
        >
          <span>Build an AI product</span>
          <span>
            <span class="highlight">faster</span>
            then ever.</span
          >
        </h1>

        <ScrollableCards v-model="userAnswer" />

        <div
          class="cta d-flex justify-content-between align-items-start align-items-lg-center"
        >
          <p class="mb-4 mb-lg-0">
            <span class="d-block"
              >Design and develope your AI product in the area of spatial
              computing.</span
            >
            <span class="d-block"
              >Bring your ideas to life with real hands - simply think, see, and
              create!</span
            >
          </p>
          <a
            class="cta-btn btn btn-primary d-flex align-items-center px-4 py-2 py-xxl-3 rounded-5 text-uppercase fw-bold"
            >Get started</a
          >
        </div>
      </section>
    </main>

    <Modal :user-answer="userAnswer" @close="handleCloseModal" />
  </div>
</template>

<style scoped lang="scss">
main {
  padding-left: 7rem;
  padding-right: 7rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 430px) {
    padding-top: 20px !important;
    padding-bottom: 20px !important;
  }
}

.hero__title {
  @media (max-width: 430px) {
    margin-bottom: 20px;
    font-size: 8vw;
  }
}

.cta {
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }

  p {
    @media (max-width: 768px) {
      margin-bottom: 20px !important;
    }
  }
}

.highlight {
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=aef2c2);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: draw 1.5s ease-in-out infinite;
  display: inline-block;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}

@keyframes draw {
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
}
</style>
