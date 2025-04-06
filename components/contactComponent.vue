<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Riferimenti
const titleRef = ref(null)
const textRef = ref(null)
const imageRef = ref(null)

onMounted(() => {
    // Titolo (se presente)
    if (titleRef.value) {
        gsap.fromTo(
            titleRef.value,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.value,
                    start: "top 90%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );
    }

    // Testo sinistra
    gsap.fromTo(
        textRef.value,
        { opacity: 0, x: -80 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: textRef.value,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
            },
        }
    );

    // Destra
    gsap.fromTo(
        imageRef.value,
        { opacity: 0, x: 80 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: imageRef.value,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
            },
        }
    );
});
</script>


<template>
    <div class="wrapperContainer">

        <div class="containerDescriptionChisiamo">
            <div class="containerLeft" ref="textRef">
                <p class=" perso font-mar text-2xl md:text-6xl text-white text-center personalized">CONTATTACI</p>
            </div>
            <div class="containerRight" ref="imageRef">
                <div>

                </div>
                <div>
                    <p class=" font-bold text-2xl md:text-3xl text-white ">Hai Un Progetto in Mente ?</p>
                    <div class="containerDescriptionContact">
                        <p class="font-extralight text-md mt-3 text-white ">Contattaci per una consulenza gratuita o per
                            ricevere un preventivo personalizzato. <br> Siamo a tua disposizione per ogni esigenza
                            edilizia.</p>

                    </div>
                </div>
                <div class="contdes">
                    <p class="text-xl md:text-2xl text-white font-semibold">
                        Email:
                        <a href="mailto:maredilcostruzioni17@gmail.com"
                            class="font-light text-xs md:text-xl cursor-pointer  hover:text-gray-300 hover:underline transition">
                            maredilcostruzioni17@gmail.com
                        </a>
                    </p>

                    <p class="text-xl md:text-2xl text-white font-semibold">
                        Tel:
                        <a href="tel:+393278210185"
                            class="font-light text-xs md:text-xl cursor-pointer hover:underline  hover:text-gray-300 transition">
                            +39 3278210185
                        </a>
                    </p>

                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.wrapperContainer {
    width: 100%;

    overflow-x: hidden;
    padding-bottom: 100px;

}

.containerTitle {
    width: 100%;

}

.buttonStyle {
    width: 200px;
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px 10px;
}

.contdes {
    margin-top: -30px;
}

.containerDescriptionChisiamo {
    width: 100%;
    display: flex;
    gap: 20px;

    padding: 30px;

}

.containerLeft {
    width: 50%;
    display: flex;
    align-items: start;
    justify-content: end;
}

.perso {
    letter-spacing: 5px;
}

.personalized {
    background: linear-gradient(to right, white, rgb(44, 90, 153));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
}

.containerDescriptionContact {
    border-bottom: 1px solid white;
    padding-top: 10px;
    padding-bottom: 20px;
}

.containerRight {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;
}

@media (max-width: 950px) {
    .containerDescriptionChisiamo {
        flex-direction: column;
    }

    .containerLeft {
        width: 100%;
        justify-content: center;
    }

    .containerRight {
        width: 100%;
        margin-top: -20px;
    }

    .containerButton {
        display: flex;
        justify-content: center;
        margin-top: 30px;
    }
}
</style>