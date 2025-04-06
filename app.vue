<script lang="ts" setup>
import headerComponent from './components/header.vue';
import headerSidebar from './components/headerSidebar.vue';

useSeoMeta({
  title: 'Ristrutturazioni e Manutenzioni Edili | MAREDIL Costruzioni',
  ogTitle: 'MAREDIL - Esperti in Ristrutturazioni e Soluzioni Edili',
  description: 'Maredil Costruzioni offre servizi di ristrutturazione, manutenzione edifici, cappotti termici, cartongessi, pitture, pavimenti e coperture per privati e aziende.',
  ogDescription: 'Affidati a Maredil per ristrutturazioni e manutenzioni di qualità. Specializzati in cappotti termici, cartongessi, pitture, pavimenti e coperture.',
  ogImage: 'https://maredilcostruzioni.it/img/maredilSeo.png',
  ogSiteName: 'MAREDIL Costruzioni',
  ogUrl: 'https://maredilcostruzioni.it',
})
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/img/faviconMaredil.svg' }
  ]
})

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
const route = useRoute()
watch(route, () => {
  isMenuOpen.value = false
})

// ✅ Variabile per colore header
const scrolledPastHero = ref(false)

const handleScroll = () => {
  scrolledPastHero.value = window.scrollY > window.innerHeight
}

const handleResize = () => {
  if (window.innerWidth > 768) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('scroll', handleScroll)
})

</script>



<template>
  <nav class="sticky-header" :class="{ 'scrolled-red': scrolledPastHero || isMenuOpen }" >
    <headerComponent @toggleMenu="toggleMenu" />
  </nav>
  <main class="mainStyle" >
      <headerSidebar class="responsiveSidebar" v-if="isMenuOpen"/>
    
        <NuxtPage />

  </main>
  <div>
    <footerComponent/>
  </div>
  
</template>

<style scoped>
.sticky-header {
  position: fixed;
  width: 100%;
  top: -5px;
  right: 0;
  z-index: 13;
  background-color: transparent;
  transition: background-color 0.4s ease, transform 0.4s ease;
}

/* ✅ Applica stile e animazione quando scrolled */
.scrolled-red {
  background-color: rgb(89, 139, 192);
  transform: translateY(4px); /* effetto discesa leggera */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2); /* ombra elegante */
}
.mainStyle{
  position: relative;
}
.wrapperHome{
  width: 100%;
  height: 100vh;
}
.wrapperService{
  width: 100%;
  height: 300px;

}
.wrapperHowis{
  width: 100%;
  height: auto;
  background-color: black;
}

@media (max-width: 768px) {
  .responsiveSidebar{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 96px;
    left: 0;
    bottom: 0;
    z-index: 1000;
  }
}
</style>