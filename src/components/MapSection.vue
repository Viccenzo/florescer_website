<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const mapEmbedUrl =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4198.248656029188!2d-48.515203299999996!3d-27.4926571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952747bfb17cdddd%3A0xf7b0eebd53c46c9!2zSMOtcGljYSBGbG9yZXNjZXIgRXF1aXRhw6fDo28!5e1!3m2!1spt-BR!2sbr!4v1760028384093!5m2!1spt-BR!2sbr'

const carouselImports = import.meta.glob('../assets/carrossel/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default'
})

const carouselImages = computed(() => Object.values(carouselImports))
const totalSlides = computed(() => carouselImages.value.length)
const hasCarouselImages = computed(() => totalSlides.value > 0)

const currentSlide = ref(0)

const nextSlide = () => {
  if (!hasCarouselImages.value) return
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
}

const prevSlide = () => {
  if (!hasCarouselImages.value) return
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
}

const goToSlide = (index) => {
  if (!hasCarouselImages.value) return
  if (index < 0 || index >= totalSlides.value) return
  currentSlide.value = index
}

const prevSlideIndex = computed(() => {
  if (totalSlides.value <= 1) return null
  return (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
})

const nextSlideIndex = computed(() => {
  if (totalSlides.value <= 1) return null
  return (currentSlide.value + 1) % totalSlides.value
})

const prevSlideImage = computed(() =>
  prevSlideIndex.value !== null ? carouselImages.value[prevSlideIndex.value] : null
)
const nextSlideImage = computed(() =>
  nextSlideIndex.value !== null ? carouselImages.value[nextSlideIndex.value] : null
)

let autoSlideInterval = null

onMounted(() => {
  if (!hasCarouselImages.value) return

  autoSlideInterval = window.setInterval(() => {
    nextSlide()
  }, 5000)
})

onBeforeUnmount(() => {
  if (autoSlideInterval) {
    window.clearInterval(autoSlideInterval)
  }
})
</script>

<template>
  <section class="map-section" aria-labelledby="map-title">
    <div class="map-section__wrapper">
      <h2 class="map-section__title" id="map-title">Nosso espaço</h2>
      <div v-if="hasCarouselImages" class="map-carousel">
        <button class="map-carousel__control map-carousel__control--prev" @click="prevSlide" type="button">
          <span aria-hidden="true">‹</span>
          <span class="visually-hidden">Imagem anterior</span>
        </button>
        <div class="map-carousel__viewport">
          <div v-if="prevSlideImage" class="map-carousel__slide map-carousel__slide--prev" aria-hidden="true">
            <img class="map-carousel__image" :src="prevSlideImage" alt="" />
          </div>
          <transition name="carousel" mode="out-in">
            <div
              v-if="carouselImages[currentSlide]"
              :key="carouselImages[currentSlide]"
              class="map-carousel__slide map-carousel__slide--current"
            >
              <img
                class="map-carousel__image map-carousel__image--current"
                :src="carouselImages[currentSlide]"
                alt="Visita guiada ao espaço Florescer"
              />
            </div>
          </transition>
          <div v-if="nextSlideImage" class="map-carousel__slide map-carousel__slide--next" aria-hidden="true">
            <img class="map-carousel__image" :src="nextSlideImage" alt="" />
          </div>
        </div>
        <button class="map-carousel__control map-carousel__control--next" @click="nextSlide" type="button">
          <span aria-hidden="true">›</span>
          <span class="visually-hidden">Próxima imagem</span>
        </button>
        <div class="map-carousel__dots">
          <button
            v-for="(image, index) in carouselImages"
            :key="image"
            class="map-carousel__dot"
            :class="{ 'map-carousel__dot--active': index === currentSlide }"
            type="button"
            @click="goToSlide(index)"
            :aria-label="`Ir para imagem ${index + 1}`"
          ></button>
        </div>
      </div>
      <p v-else class="map-carousel__empty">
        Em breve vamos mostrar o nosso espaço com várias fotos cheias de aventuras!
      </p>
      <div class="map-section__frame">
        <iframe
          :src="mapEmbedUrl"
          title="Localização Florescer Equitação Lúdica no Google Maps"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<style scoped>
.map-section {
  padding: 0 1.5rem 0rem;
}

.map-section__wrapper {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
}

.map-section__title {
  font-size: clamp(1.75rem, 2.5vw + 1rem, 2.4rem);
  color: #8a5227;
  margin-bottom: 1.5rem;
}

.map-carousel {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.map-carousel__viewport {
  position: relative;
  overflow: visible;
  border-radius: 18px;
  min-height: 420px;
  padding: 1.5rem 0;
}

.map-carousel__slide {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transition: transform 0.35s ease, opacity 0.35s ease, filter 0.35s ease;
}

.map-carousel__slide--current {
  z-index: 2;
  transform: translate(-50%, -50%) rotate(0deg) scale(1);
}

.map-carousel__slide--prev {
  transform: translate(-160%, -55%) rotate(-20deg) scale(0.78);
  opacity: 0.6;
  filter: saturate(0.85);
  z-index: 1;
}

.map-carousel__slide--next {
  transform: translate(60%, -55%) rotate(20deg) scale(0.78);
  opacity: 0.6;
  filter: saturate(0.85);
  z-index: 1;
}

.map-carousel__image {
  width: auto;
  max-width: min(260px, 60vw);
  height: min(400px, 60vh);
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 18px 36px rgba(138, 82, 39, 0.22);
  background: transparent;
  padding: 0;
}

.map-carousel__image--current {
  max-width: min(402px, 90vw);
  height: min(570px, 80vh);
  box-shadow: 0 24px 40px rgba(138, 82, 39, 0.28);
}

.map-carousel__control {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #8a5227;
  color: #f5ebdc;
  font-size: 2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0 6px 16px rgba(138, 82, 39, 0.25);
}

.map-carousel__control:hover,
.map-carousel__control:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(80, 47, 20, 0.3);
}

.map-carousel__dots {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.map-carousel__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: rgba(138, 82, 39, 0.3);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.map-carousel__dot--active {
  transform: scale(1.2);
  background: #8a5227;
}

.map-carousel__empty {
  margin: 0 0 2rem;
  font-size: 1rem;
  color: #4a3826;
  background: rgba(255, 232, 198, 0.65);
  border-radius: 14px;
  padding: 1.25rem 1.5rem;
}

.map-section__frame {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(138, 82, 39, 0.18);
  border: 4px solid #ffe8c6;
}

.map-section__frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.carousel-enter-active,
.carousel-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.carousel-enter-from,
.carousel-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

@media (max-width: 680px) {
  .map-carousel {
    grid-template-columns: 1fr;
    position: relative;
    gap: 0.75rem;
    padding: 0 1rem;
  }

  .map-carousel__viewport {
    overflow: hidden;
    padding: 0.5rem 0;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .map-carousel__control {
    position: absolute;
    top: 50%;
    width: 42px;
    height: 42px;
    transform: translateY(-50%);
  }

  .map-carousel__control--prev {
    left: 0;
  }

  .map-carousel__control--next {
    right: 0;
  }

  .map-carousel__control:hover,
  .map-carousel__control:focus {
    transform: translateY(calc(-50% - 2px));
    box-shadow: 0 10px 24px rgba(80, 47, 20, 0.3);
  }

  .map-carousel__slide {
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .map-carousel__slide--current {
    transform: none;
  }

  .map-carousel__slide--prev,
  .map-carousel__slide--next {
    display: none;
  }

  .map-carousel__image {
    width: min(240px, 80vw);
    max-width: 100%;
    height: auto;
    max-height: 50vh;
    margin: 0 auto;
  }

  .map-carousel__image--current {
    width: min(260px, 85vw);
    max-width: 100%;
    height: auto;
    max-height: 50vh;
    box-shadow: 0 18px 32px rgba(138, 82, 39, 0.24);
  }

  .map-carousel__dots {
    margin-top: 0.5rem;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0 0.5rem;
  }
}

@media (min-width: 681px) {
  .map-carousel__viewport {
    overflow: visible;
    padding: 1.5rem 0;
    min-height: 560px;
    display: block;
    align-items: initial;
    justify-content: initial;
  }

  .map-carousel__slide {
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center;
    width: auto;
    display: block;
  }

  .map-carousel__slide--current {
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
  }

  .map-carousel__slide--prev {
    display: block;
    transform: translate(-160%, -55%) rotate(-20deg) scale(0.78);
    opacity: 0.6;
    filter: saturate(0.85);
  }

  .map-carousel__slide--next {
    display: block;
    transform: translate(60%, -55%) rotate(20deg) scale(0.78);
    opacity: 0.6;
    filter: saturate(0.85);
  }

  .map-carousel__image {
    width: auto;
    max-width: min(260px, 60vw);
    height: min(400px, 60vh);
    margin: 0;
  }

  .map-carousel__image--current {
    max-width: min(402px, 90vw);
    height: min(570px, 80vh);
    box-shadow: 0 24px 40px rgba(138, 82, 39, 0.28);
  }

  .map-carousel__dots {
    margin-top: 0.75rem;
    flex-wrap: nowrap;
    gap: 0.75rem;
    padding: 0;
  }
}
</style>
