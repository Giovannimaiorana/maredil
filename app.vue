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
  ogUrl: 'https://maredil.it',
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
const handleResize = () => {
  if (window.innerWidth > 768) {
    isMenuOpen.value = false
  }
}
onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <nav class="sticky-header">
    <headerComponent @toggleMenu="toggleMenu"  />
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
  position: sticky;      
  top: 0;               
  z-index: 10;          
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
    top: 100px;
    left: 0;
    bottom: 0;
    z-index: 1000;
  }
}
</style>