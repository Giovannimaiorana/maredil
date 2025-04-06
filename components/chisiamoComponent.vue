<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const titleRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const imageRef = ref<HTMLElement | null>(null);

onMounted(() => {

  gsap.from(titleRef.value, {
    opacity: 0,
    y: -50,
    duration: 2,
    scrollTrigger: {
      trigger: titleRef.value,
      start: "top 98%",
      scrub: true,
    }
  });


  gsap.from(textRef.value, {
    opacity: 0,
    x: -80,
    scrollTrigger: {
      trigger: textRef.value,
      start: "top 98%",
      end: "top 60%", 
      scrub: true,
    }
  });


  gsap.from(imageRef.value, {
    opacity: 0,
    x: 80,
    scrollTrigger: {
      trigger: imageRef.value,
      start: "top 98%",
      end: "top 60%", 
      scrub: true,
    }
  });
});
</script>




<template>
  <div class="wrapperContainer">
    <div class="containerTitle" ref="titleRef">
      <p class="font-mar text-2xl md:text-6xl text-white text-center">CHI SIAMO</p>
    </div>
    <div class="containerDescriptionChisiamo">
      <div class="containerLeft" ref="textRef">
        <div>
          <p class="text-white">
            Siamo un team di professionisti con una lunga esperienza nel settore dell’edilizia, cresciuti con la passione per il costruire e la dedizione al lavoro fatto a regola d’arte. Nel corso degli anni abbiamo seguito progetti di ogni tipo, dalle piccole ristrutturazioni agli interventi strutturali più complessi, sempre con un approccio attento alle esigenze del cliente e al contesto in cui operiamo.
          </p>
          <div class="containerButton">
            <p class="buttonStyle text-white text-center mt-3 cursor-pointer">SCOPRI CHI SIAMO</p>
          </div>
        </div>
      </div>
      <div class="containerRight" ref="imageRef">
        <img src="/img/operai.jpg" alt="">
      </div>
    </div>
  </div>
</template>


<style scoped>
.wrapperContainer{
    width: 100%;
    height: auto;
    padding-top: 100px;
    overflow-x: hidden;
}
.containerTitle{
    width: 100%;

}
.buttonStyle{
  width: 200px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
}
.containerDescriptionChisiamo{
    width: 100%;
    display: flex;
    gap: 20px;
    margin-top: 50px;
    padding: 30px;

}
.containerLeft{
    width: 50%;
}
.containerRight{
    width: 50%;
}
.containerRight img{
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
}

@media (max-width: 950px) {
    .containerDescriptionChisiamo{
        flex-direction:  column-reverse;
    } 
    .containerLeft{
    width: 100%;
}
.containerRight{
    width: 100%;
}
.containerButton{
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
}
</style>