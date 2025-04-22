<script lang="ts">
import { defineComponent, ref, computed, watch, onMounted, nextTick, onBeforeUnmount } from 'vue';
import gsap from 'gsap';

export default defineComponent({
  name: 'CaroselloSplit',

  setup() {
    const slides = Array.from({ length: 19 }, (_, i) => ({
      path: `/img/foto${i + 1}.JPG`,
      text: `Titolo ${i + 1}`,
    }));

    const currentIndex = ref(0);
    const isMobile = ref(false);
    const interval = ref<NodeJS.Timer | null>(null);

    const titleRef = ref(null);
    const leftImageRef = ref(null);
    const rightImageRef = ref(null);

    const currentSlide = computed(() => slides[currentIndex.value]);
    const prevSlide = computed(() =>
      currentIndex.value === 0
        ? slides[slides.length - 1]
        : slides[currentIndex.value - 1]
    );

    const checkMobile = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    const animateImages = () => {
      nextTick(() => {
        gsap.fromTo(
          rightImageRef.value,
          {
            x: 50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power2.out',
          }
        );

        gsap.fromTo(
          leftImageRef.value,
          {
            x: -30,
            opacity: 0.6,
          },
          {
            x: 0,
            opacity: 0.8,
            duration: 0.7,
            ease: 'power2.inOut',
          }
        );
      });
    };

    const moveNext = () => {
      currentIndex.value = (currentIndex.value + 1) % slides.length;
    };

    const movePrev = () => {
      currentIndex.value =
        (currentIndex.value - 1 + slides.length) % slides.length;
    };

    const autoPlay = () => {
      if (interval.value) clearInterval(interval.value);
      if (isMobile.value) {
        interval.value = setInterval(() => {
          moveNext();
        }, 4000);
      }
    };

    onMounted(() => {
      checkMobile();
      window.addEventListener('resize', () => {
        checkMobile();
        autoPlay();
      });

      gsap.from(titleRef.value, {
        opacity: 0,
        y: -60,
        scale: 1.1,
        duration: 1.4,
        ease: 'power2.out',
      });

      animateImages();
      autoPlay();
    });

    watch(currentIndex, animateImages);

    onBeforeUnmount(() => {
      if (interval.value) clearInterval(interval.value);
      window.removeEventListener('resize', checkMobile);
    });

    return {
      currentSlide,
      prevSlide,
      moveNext,
      movePrev,
      titleRef,
      leftImageRef,
      rightImageRef,
      isMobile,
    };
  },
});
</script>

<template>
  <div class="containerTitle">
    <p ref="titleRef" class="font-mar text-2xl md:text-6xl text-white text-center">
      I Nostri Lavori
    </p>
  </div>

  <div class="containerCarosel">
    <!-- Immagine Precedente -->
    <div class="containerLeft">
      <img
        ref="leftImageRef"
        :src="prevSlide.path"
        :alt="prevSlide.text"
        class="image"
        key="left"
      />
    </div>

    <!-- Immagine Corrente -->
    <div class="containerRight">
      <img
        ref="rightImageRef"
        :src="currentSlide.path"
        :alt="currentSlide.text"
        class="image"
        key="right"
      />
    </div>

    <!-- Frecce solo su desktop -->
    <div class="buttons" v-if="!isMobile">
      <button @click="movePrev">‹</button>
      <button @click="moveNext">›</button>
    </div>
  </div>
</template>

<style scoped>
.containerTitle {
  padding-top: 40px;
  padding-bottom: 10px;
}

.containerCarosel {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px 0;
}

.containerLeft,
.containerRight {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
}

@media (min-width: 768px) {
  .containerLeft,
  .containerRight {
    width: 50%;
    height: 400px;
  }
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  /* Nessun border-radius */
}

/* Pulsanti visibili solo su desktop */
.buttons {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  transform: translateY(-50%);
  z-index: 2;
  pointer-events: none;
}

button {
display: flex;
align-items: center;
justify-content: center;
  height: 40px;
  width: 40px;
  pointer-events: auto;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  font-size: 28px;
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
}

button:hover {
  background: rgba(0, 0, 0, 0.6);
}
</style>
