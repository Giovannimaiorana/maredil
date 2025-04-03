<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    const words = ref([
      "RISTRUTTURAZIONI",
      "MANUTENZIONI",
      "CAPPOTTI TERMICI",
      "CARTONGESSI",
      "PITTURE",
      "PAVIMENTI",
      "COPERTURE"
    ]);

    const wordRefs = ref([]);
    const descriptionRef = ref(null);  // Aggiungi un riferimento per la sezione descrizione
    const imageRef = ref(null);        // Aggiungi un riferimento per l'immagine
    
    onMounted(() => {
      // Animazione per le parole
      gsap.fromTo(
        wordRefs.value,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          duration: 1.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".animatedWords",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
      
      // Animazione per la descrizione e l'immagine
      gsap.fromTo(
        [descriptionRef.value, imageRef.value], 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 3.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".wrapperDescription",
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return { words, wordRefs, descriptionRef, imageRef };
  }
};
</script>

<template>
  <div class="wrapperService">
    <div class="containerTitle">
      <p class="font-mar text-2xl md:text-6xl text-white text-center personalized">
        LE NOSTRE SOLUZIONI EDILI
      </p>
    </div>
    <div class="animatedWords">
      <span v-for="(word, index) in words" :key="index" class="word" ref="wordRefs">
        {{ word }}
      </span>
    </div>
    
    <!-- Sezione descrizione -->
    <div class="wrapperDescription" ref="descriptionRef">
      <div>
        <p class="text-2xl md:text-3xl text-white text-left font-bold">
          Maredil – Soluzioni Edili Complete per Ogni Esigenza
        </p>
      </div>
      <div class="containerGeneralDescription mt-5">
        <div class="containerLeft mt-3">
          <p class="text-white text-md">
            Maredil è un'azienda di riferimento nel settore edile, che offre una vasta gamma di servizi per soddisfare le necessità di ristrutturazioni, manutenzioni e miglioramenti strutturali. Con un’esperienza consolidata nel tempo, ci specializziamo in ristrutturazioni complete, manutenzioni periodiche, cappotti termici per l’efficienza energetica, cartongesso per la creazione di spazi funzionali e moderni, pitture decorative per rinnovare gli interni ed esterni, pavimenti eleganti e resistenti, e coperture sicure e performanti. Il nostro team di esperti affronta ogni progetto con la massima cura, dalla progettazione alla realizzazione, garantendo un elevato standard di qualità e professionalità. Siamo impegnati a ottimizzare ogni spazio, migliorare il comfort abitativo e ridurre i consumi energetici attraverso soluzioni innovative e sostenibili. Che si tratti di un restyling completo di un immobile, della manutenzione ordinaria per preservare il valore della tua casa o della realizzazione di interventi specifici come l'isolamento termico o la posa di pavimenti, Maredil offre servizi personalizzati, pensati per durare nel tempo. Ogni nostro intervento è progettato per rispondere alle tue esigenze, combinando estetica, funzionalità e sicurezza. Grazie alla nostra esperienza e alla passione per il lavoro ben fatto, Maredil è il partner ideale per chi cerca soluzioni edili moderne, affidabili e di qualità, per trasformare e migliorare ogni ambiente.
          </p>
        </div>
        <div class="containerRight" ref="imageRef">
          <div class="containerPhoto">
            <img src="/img/operai.jpg" alt="Operai al lavoro">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapperService {
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.containerTitle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
}

.personalized {
  background: linear-gradient(to right, white, rgb(44, 90, 153));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.animatedWords {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 30px 10px;
  max-width: 90%;
}

.word {
  font-size: clamp(1rem, 4vw, 1.5rem);
  font-weight: bold;
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  opacity: 0;
  text-align: center;
}
.containerGeneralDescription{
  width: 100%;
  display: flex;
  height: auto;
  gap: 40px;
}
.wrapperDescription{
  width: 100%;
  height: auto;
  padding: 50px;

}
.containerLeft{
  width: 50%;
  display: flex;
  align-items: center;
}
.containerRight{
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
}
.containerPhoto{
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
}  
.containerPhoto  img{
  height: 100%;
  object-fit: cover;
}
@media (max-width: 950px) {
  .containerGeneralDescription{
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  gap: 40px;
}
.wrapperDescription{
  width: 100%;
  height: auto;
  padding: 30px;

}
.containerLeft{
  width: 100%;
  display: flex;
  align-items: center;
}
.containerRight{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
}
</style>
