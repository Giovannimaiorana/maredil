<script lang="ts" setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.certificazioneSOA', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
  })
})
</script>

<template>
  <div class="wrapperService">
 

    <!-- Nuova sezione CERTIFICAZIONE SOA -->
    <div class="certificazioneSOA row mt-10">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white text-center">CERTIFICAZIONE SOA</p>
      <p class="text-white text-xs space mt-3 mb-3 text-center">
        La nostra impresa è certificata SOA, garanzia di qualità, affidabilità e competenza
        per lavori pubblici e privati di ogni entità.
      </p>
    </div>

    <!-- Bottone finale -->

    </div>
  
</template>

<style scoped>
.wrapperService {
  padding: 2rem;
}
.containerTitle {
  margin-bottom: 2rem;
}
.row {
  margin-top: 2rem;
}
.text-center {
  text-align: center;
}

.buttonStyle:hover {
  background-color: #e65c00;
}
</style>
