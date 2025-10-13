<script setup>
import LogoVetor from '../assets/LogoVetor.svg'
import InstagramIcon from '../assets/Insta.svg'
import WhatsappIcon from '../assets/Whatsapp.svg'
import GoogleMapsIcon from '../assets/google-maps.png'
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
          href="https://www.instagram.com/florescerequitacaoludica/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Florescer Equitação Lúdica"
        >
          <img :src="InstagramIcon" alt="" />
        </a>
        <a
          class="nav-social"
          href="https://wa.me/48988100093"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Conversar no WhatsApp"
        >
          <img :src="WhatsappIcon" alt="" />
        </a>
        <a
          class="nav-social"
          href="https://maps.app.goo.gl/BYiorq7TkdKVEY928"
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
  max-width: 1120px;
  margin: 0 auto;
  padding: 0.7rem 1.8rem 2.2rem;
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
    padding: 0.6rem 1.5rem 1.8rem;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.2rem 1.25rem 1.6rem;
    gap: 1.1rem;
  }

  .nav-logo {
    position: static;
    transform: none;
    width: 82px;
    height: 82px;
    border-width: 4px;
    margin-bottom: 0.25rem;
  }

  .nav-actions {
    justify-content: center;
    width: auto;
    gap: 0.75rem;
  }

  .nav-social {
    width: 34px;
    height: 34px;
  }
}

.nav-social:hover,
.nav-social:focus {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 20px rgba(74, 56, 38, 0.15);
}
</style>
