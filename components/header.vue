<script lang="ts" setup>
const route = useRoute()



const isActive = (path: string) => route.path === path
const emit = defineEmits(['toggleMenu'])

const onHamburgerClick = () => {
  emit('toggleMenu')
}
</script>

<template>
    <div class="continerHeader">
        <div class="containerLogo">
            <NuxtLink to="/">  <img src="/img/logomaredilbiancoII.svg" alt=""></NuxtLink>
        </div>
        <div class="containerMenu">
            <p class="text-white cursor-pointer font-bold">CHI SIAMO</p>
            <p class="text-white cursor-pointer font-bold">SERVIZI</p>
            <p class="text-white cursor-pointer font-bold">CONTATTI</p>
        </div>
        <div class="containerResponsive">
            <img   @click="onHamburgerClick" class="cursor-pointer" src="/img/hamburgerMenu2.svg" alt="">
        </div>
    </div>
</template>

<style scoped>
.continerHeader {
    height: 100px;
    width: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background-color: rgb(89, 138, 192);
    z-index: 4;

}
.containerLogo img{
height: 80px;
}
.activeLanguage{
    color: #78f9ad;
}
.containerMenu{
    display: flex;
    align-items: center;
    gap: 20px;
}
.containerMenu p:hover{
    color: rgb(44, 90, 153);
}
.containerResponsive{
    display: none;
}
@media (max-width: 768px) {
    .containerMenu{
        display: none;
    }
    .containerResponsive{
    display: flex;
    }
    .containerResponsive img{
        height: 30px;
    }

}
</style>