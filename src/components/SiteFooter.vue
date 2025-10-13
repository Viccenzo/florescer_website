<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__wrapper">
      <p class="site-footer__message">
        Tudo feito e desenvolvido com amor pela equipe EquiNova Florescer para você e para seus filhos!
      </p>
      <p class="site-footer__copyright">Todos os direitos reservados • {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(135deg, #8a5227, #6d3d1d);
  color: #fbeee0;
  padding: 2.5rem 1.5rem;
  margin-top: 3rem;
}

.site-footer__wrapper {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.site-footer__message {
  font-size: clamp(1rem, 1vw + 0.9rem, 1.2rem);
  line-height: 1.7;
  margin: 0;
}

.site-footer__copyright {
  font-size: 0.95rem;
  color: rgba(251, 238, 224, 0.9);
  margin: 0;
}
</style>
