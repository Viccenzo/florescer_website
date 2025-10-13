<script setup>
import { ref } from 'vue'
import EmotionalImage from '../assets/Emocional.png'
import IntellectualImage from '../assets/inteligencia.png'
import PhysicalImage from '../assets/Forca.png'

const pillars = [
  {
    title: 'Desenvolvimento emocional',
    image: EmotionalImage,
    alt: 'Criança abraçando um pônei sorridente',
    summary: 'Momentos acolhedores que fortalecem vínculos, autoestima e segurança.',
    details:
      'Fortalecemos a confiança, a empatia e o vínculo com os animais em atividades guiadas pensadas para acolher cada pequena personalidade.'
  },
  {
    title: 'Desenvolvimento intelectual',
    image: IntellectualImage,
    alt: 'Criança aprendendo em aula de equitação',
    summary: 'Jogos e histórias lúdicas despertam curiosidade e pensamento criativo.',
    details:
      'Histórias, jogos e desafios leves ensinam noções de cuidado, responsabilidade e curiosidade científica sobre o mundo equestre.'
  },
  {
    title: 'Desenvolvimento físico',
    image: PhysicalImage,
    alt: 'Criança praticando equilíbrio sobre o cavalo',
    summary: 'Movimentos guiados estimulam equilíbrio, coordenação e consciência corporal.',
    details:
      'Alongamentos divertidos e exercícios de equilíbrio ajudam a coordenação motora, o tônus muscular e o senso de movimento com segurança.'
  }
]

const hoveredPillar = ref(null)
</script>

<template>
  <section class="pillars" aria-labelledby="pillars-title">
    <div class="pillars__wrapper">
      <h2 class="pillars__title" id="pillars-title">Pilares da nossa metodologia</h2>
      <div class="pillars__grid" :class="{ 'pillars__grid--hovered': hoveredPillar }">
        <article
          v-for="pillar in pillars"
          :key="pillar.title"
          class="pillar-card"
          :class="{
            'pillar-card--active': hoveredPillar === pillar.title,
            'pillar-card--inactive': hoveredPillar && hoveredPillar !== pillar.title
          }"
          tabindex="0"
          @mouseenter="hoveredPillar = pillar.title"
          @mouseleave="hoveredPillar = null"
          @focusin="hoveredPillar = pillar.title"
          @focusout="hoveredPillar = null"
        >
          <img class="pillar-card__image" :src="pillar.image" :alt="pillar.alt" />
          <h3 class="pillar-card__title">{{ pillar.title }}</h3>
          <p class="pillar-card__text">{{ pillar.summary }}</p>
          <p class="pillar-card__details">{{ pillar.details }}</p>
        </article>
      </div>
      <div class="mission">
        <h3 class="mission__title">Nossa missão</h3>
        <p class="mission__text">
          Proporcionar experiências significativas e prazerosas com os cavalos, promovendo o bem-estar emocional,
          desenvolvimento motor, intelectual e a confiança de crianças e adultos por meio de atividades lúdicas e
          respeitosas. Buscamos que o contato e o aprendizado da equitação seja leve, divertido e tranquilizador, para
          que cada aluno se sinta seguro para explorar, aprender e crescer.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pillars {
  padding: 0 1.5rem 1rem;
}

.pillars__wrapper {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
}

.pillars__title {
  font-size: clamp(1.75rem, 2.5vw + 1rem, 2.5rem);
  color: #8a5227;
  margin-bottom: 2rem;
}

.pillars__grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}

.pillar-card {
  background: #fff7ec;
  border-radius: 18px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 10px 24px rgba(138, 82, 39, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease, background 0.25s ease;
  transform: scale(1);
  cursor: pointer;
}

.pillar-card__image {
  display: block;
  height: 160px;
  max-width: 100%;
  width: auto;
  object-fit: contain;
}

.pillar-card__title {
  font-size: 1.25rem;
  color: #4a3826;
  margin: 0;
}

.pillar-card__text {
  margin: 0;
  color: #5b452f;
  font-size: 1rem;
  line-height: 1.5;
}

.pillar-card__details {
  margin: 0;
  color: #5b452f;
  font-size: 0.95rem;
  line-height: 1.55;
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
}

.pillar-card--active {
  transform: scale(1.08);
  box-shadow: 0 16px 32px rgba(138, 82, 39, 0.18);
  background: #ffe8c6;
  z-index: 1;
}

.pillar-card--active .pillar-card__details {
  max-height: 200px;
  opacity: 1;
}

.pillar-card--inactive {
  transform: scale(0.92);
  opacity: 0.6;
}

.mission {
  margin-top: 2.75rem;
  text-align: center;
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;
}

.mission__title {
  font-size: clamp(1.5rem, 2vw + 1rem, 2.2rem);
  color: #8a5227;
  margin-bottom: 1rem;
}

.mission__text {
  font-size: clamp(1rem, 1vw + 0.8rem, 1.15rem);
  color: #4a3826;
  line-height: 1.8;
  margin: 0;
}

</style>
