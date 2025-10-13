<script setup>
const whatsappLink = 'https://wa.me/48988100093'
import HeroImage from '../assets/img_init_3.svg'
</script>

<template>
  <section class="hero-section" id="inicio">
    <img class="hero-section__image" :src="HeroImage" alt="Crianças se divertindo com cavalos na aula de equitação" />
    <a class="hero-section__cta" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
      Entre em Contato!
    </a>
  </section>
</template>

<style scoped>
.hero-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  padding: 1rem 1.5rem 0;
}

.hero-section__image {
  max-width: min(680px, 90vw);
  width: 100%;
}

.hero-section__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.06rem 2.25rem;
  border-radius: 999px;
  background: #8a5227;
  color: #f5ebdc;
  font-weight: 700;
  font-size: 1.31rem;
  text-decoration: none;
  box-shadow: 0 12px 28px rgba(138, 82, 39, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.hero-section__cta:hover,
.hero-section__cta:focus {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(138, 82, 39, 0.22);
}
</style>
