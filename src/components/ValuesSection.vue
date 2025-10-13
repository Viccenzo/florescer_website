<script setup>
const whatsappLink = 'https://wa.me/48988100093'
import ValoresImage from '../assets/valores.svg'
</script>

<template>
  <section class="values" id="contato">
    <div class="values__wrapper">
      <h2 class="values__title">Valores</h2>
      <img class="values__image" :src="ValoresImage" alt="Nossos valores representados visualmente" />
      <a class="values__cta" :href="whatsappLink" target="_blank" rel="noopener noreferrer">
        Entre em Contato!
      </a>
    </div>
  </section>
</template>

<style scoped>
.values {
  padding: 3rem 1.5rem 1rem;
}

.values__wrapper {
  max-width: min(450px, 90vw);
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.values__title {
  font-size: clamp(1.9rem, 2.5vw + 1.2rem, 2.6rem);
  color: #8a5227;
  margin: 0;
}

.values__image {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 20px 42px rgba(138, 82, 39, 0.2);
  object-fit: cover;
}

.values__cta {
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

.values__cta:hover,
.values__cta:focus {
  transform: translateY(-2px);
  box-shadow: 0 16px 32px rgba(138, 82, 39, 0.22);
}

@media (max-width: 680px) {
  .values {
    padding: 2.5rem 1.25rem 3rem;
  }
}
</style>
