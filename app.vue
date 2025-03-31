<script lang="ts" setup>
import headerComponent from './components/header.vue';
import headerSidebar from './components/headerSidebar.vue';


useSeoMeta({
  title: 'Transizione Digitale ed Ecosostenibile | Trade',
  ogTitle: 'Trade - Ingegneria per l’Efficienza e la Sostenibilità',
  description: 'Affianchiamo aziende e pubbliche amministrazioni nella transizione digitale ed ecosostenibile con soluzioni di Ingegneria Ambientale su misura.',
  ogDescription: 'Trade: il partner ideale per innovare e rendere sostenibile il tuo business. Scopri i nostri servizi di ingegneria ambientale.',
  ogImage: 'https://tradegreen.tech/img/tradeSeo.png',
  ogSiteName: 'Trade',
  ogUrl: 'https://tradegreen.tech',
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