<script setup>
import LogoVetor from '../assets/LogoVetor.svg'
import InstagramIcon from '../assets/Insta.svg'
import WhatsappIcon from '../assets/Whatsapp.svg'
import GoogleMapsIcon from '../assets/google-maps.png'
import { instagramUrl, whatsappUrl, googleMapsUrl } from '../config/socialLinks'
</script>

<template>
  <header class="app-header">
    <nav class="main-nav">
      <a class="nav-logo" href="#inicio">
        <img class="nav-logo__image" :src="LogoVetor" alt="Florescer Escola de Equitação" />
      </a>
      <div class="nav-actions">
        <a
          class="nav-social"
          :href="instagramUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Florescer Equitação Lúdica"
        >
          <img :src="InstagramIcon" alt="" />
        </a>
        <a
          class="nav-social"
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
        >
          <img :src="WhatsappIcon" alt="" />
        </a>
        <a
          class="nav-social"
          :href="googleMapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver localização no Google Maps"
        >
          <img class="nav-social__image nav-social__image--maps" :src="GoogleMapsIcon" alt="" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.app-header {
  background: #d9b892;
  border-bottom: 4px solid #c49a6c;
  box-shadow: 0 6px 16px rgba(91, 61, 20, 0.12);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.main-nav {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1.4rem 1.8rem 1.4rem;
  gap: 2rem;
}

.nav-logo {
  position: absolute;
  left: 1.8rem;
  bottom: 0;
  transform: translateY(50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 106px;
  height: 106px;
  background: #d9b892;
  border: 6px solid #c49a6c;
  border-radius: 50%;
  box-shadow: 0 14px 28px rgba(64, 40, 15, 0.25);
  line-height: 0;
}

.nav-logo__image {
  height: 64px;
  width: auto;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5ebdc;
  box-shadow: inset 0 0 0 1px rgba(74, 56, 38, 0.08);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.nav-social img {
  width: 100%;
  height: 100%;
}

.nav-social__image--maps {
  border-radius: 12px;
}

@media (max-width: 768px) {
  .main-nav {
    padding: 1.4rem 1.5rem 1.4rem;
  }

  .nav-logo {
    left: 1.5rem;
    width: 84px;
    height: 84px;
    border-width: 5px;
  }

  .nav-logo__image {
    height: 50px;
  }
}

@media (max-width: 540px) {
  .main-nav {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 1rem 1.25rem;
    gap: 1rem;
  }

  .nav-logo {
    position: static;
    transform: none;
    width: 74px;
    height: 74px;
    border-width: 4px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .nav-logo__image {
    height: 44px;
  }

  .nav-actions {
    justify-content: flex-end;
    width: auto;
    gap: 0.65rem;
  }

  .nav-social {
    width: 32px;
    height: 32px;
  }
}

.nav-social:hover,
.nav-social:focus {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 20px rgba(74, 56, 38, 0.15);
}
</style>
