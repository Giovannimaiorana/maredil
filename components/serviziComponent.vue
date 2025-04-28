<script>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  setup() {
    onMounted(() => {

      gsap.utils.toArray(".row").forEach((row, index) => {
        gsap.from(row, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });


      gsap.from(".containerTitle p", {
        opacity: 0,
        y: -30,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      });

      gsap.from(".containerButton", {
        opacity: 0,
        x: 40,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".containerButton",
          start: "top 95%", 
          toggleActions: "play none none reverse",
        },
      });
    });
  },
};
</script>


<template>
  <div class="wrapperService">
    <div class="containerTitle mb-3">
      <p class="font-mar text-2xl md:text-6xl text-white text-center personalized">
        LE NOSTRE SOLUZIONI EDILI
      </p>
    </div>

    <div class="row mt-10">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">RISTRUTTURAZIONI</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Trasformiamo e miglioriamo ogni spazio con interventi su misura.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">CAPPOTTI TERMICI</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Isolamento efficiente per un comfort termico ottimale e risparmio energetico.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">MANUTENZIONI</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Servizi di riparazione e cura per mantenere ogni struttura in perfette condizioni.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">CARTONGESSI</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Soluzioni versatili per pareti, soffitti e arredi moderni e funzionali.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">COPERTURE</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Protezione e resistenza con coperture adatte a ogni esigenza strutturale.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">PAVIMENTI</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Posiamo pavimenti durevoli e di design per ogni ambiente.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">PITTURE</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Finiture di qualità per dare colore e stile agli spazi.
      </p>
    </div>

    <!-- Nuove sezioni aggiunte -->
    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">LAVORI STRADALI</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Realizziamo e manuteniamo strade e infrastrutture viarie con materiali di alta qualità e tecnologie avanzate.
      </p>
    </div>

    <div class="row mt-5">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">FOGNATURE</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Costruzione e ristrutturazione di reti fognarie per garantire efficienza, sicurezza e rispetto delle normative ambientali.
      </p>
    </div>

    <div class="row mt-5 mb-10">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white">MOVIMENTO TERRA</p>
      <p class="text-white text-xs space mt-3 mb-3">
        Operazioni di scavo, livellamento e modellazione del terreno per ogni tipo di progetto edilizio.
      </p>
    </div>

    <div id="cont" class=" row mt-10">
      <p class="text-2xl md:text-4xl lg:text-6xl text-white text-center font-bold colorfully">CERTIFICAZIONE SOA</p>
      <p class="text-white text-xs space mt-3 mb-3 text-center">
        La nostra impresa è certificata SOA, garanzia di qualità, affidabilità e competenza
        per lavori pubblici e privati di ogni entità.
      </p>
    </div>
    <!-- Fine nuove sezioni -->

  </div>
</template>


<style scoped>
#cont{
  border: none;
}
.wrapperService {
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
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
.row{
  width: 90%;
  border-bottom: 1px solid white;
}
.colorfully{
  color: orange;
}
.space{
  letter-spacing: 3px;
}
.buttonStyle{
  width: 200px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 10px;
}
.containerButton{
  margin-top: 50px;
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
