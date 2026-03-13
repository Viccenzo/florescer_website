<script setup>
import InstructionImage from '../assets/Lais_Foto.svg'
import LaisVideo from '../assets/lais.mp4'
</script>

<template>
  <section class="instruction" aria-labelledby="instruction-title">
    <div class="instruction__wrapper">
      <h2 class="instruction__title" id="instruction-title">Instrução</h2>
      <p class="instruction__subtitle">Lais Fernanda</p>
      <div class="instruction__content">
        <div class="instruction__media">
          <img class="instruction__image" :src="InstructionImage" alt="Laís" />
        </div>
        <div class="instruction__media">
          <video
            class="instruction__video"
            :src="LaisVideo"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            aria-label="Vídeo com instrução de Laís Fernanda Oliver"
          ></video>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.instruction {
  padding: 2.5rem 1.5rem 2rem;
}

.instruction__wrapper {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: center;
}

.instruction__title {
  font-size: clamp(1.9rem, 2.5vw + 1.2rem, 2.6rem);
  color: #8a5227;
  margin: 0;
}

.instruction__subtitle {
  font-size: 1.45rem;
  color: #4a3826;
  font-weight: 600;
  margin: 0;
}

.instruction__content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  align-items: center;
}

.instruction__media {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.instruction__image {
  width: 60%;
  border-radius: 18px;
  box-shadow: 0 16px 32px rgba(138, 82, 39, 0.18);
  object-fit: cover;
}

.instruction__video {
  width: 60%;
  max-width: 360px;
  border-radius: 18px;
  box-shadow: 0 16px 32px rgba(138, 82, 39, 0.18);
  background: #000;
  aspect-ratio: 9 / 16;
}

@media (max-width: 680px) {
  .instruction {
    padding: 2rem 1.25rem 2.5rem;
  }

  .instruction__video {
    width: 60%%;
    max-width: none;
  }
}
</style>
