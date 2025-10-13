<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import PillarsSection from './components/PillarsSection.vue'
import InstructionSection from './components/InstructionSection.vue'
import MapSection from './components/MapSection.vue'
import ValuesSection from './components/ValuesSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="app">
    <AppHeader />
    <main>
      <HeroSection />
      <div class="section-divider" aria-hidden="true"></div>
      <PillarsSection />
      <div class="section-divider" aria-hidden="true"></div>
      <InstructionSection />
      <div class="section-divider" aria-hidden="true"></div>
      <MapSection />
      <div class="section-divider" aria-hidden="true"></div>
      <ValuesSection />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped>
:global(body) {
  background: #f5ebdc;
  color: #4a3826;
  font-family: 'Nunito', 'Poppins', 'Segoe UI', sans-serif;
  margin: 0;
}

main {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.section-divider {
  width: min(250px, 40vw);
  height: 4px;
  margin: 3rem auto;
  margin-bottom: 0rem;
  background: #8a5227;
  border-radius: 999px;
}
</style>
