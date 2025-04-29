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
            <NuxtLink to="/">  <img src="/img/logomaredilbiancsrl.svg" alt=""></NuxtLink>
        </div>
     <!--   <div class="containerMenu">
            <p class="text-white cursor-pointer font-bold font-mar ">CHI SIAMO</p>
            <p class="text-white cursor-pointer font-bold font-mar "><NuxtLink to="/service">SERVIZI</NuxtLink></p>
            <p class="text-white cursor-pointer font-bold font-mar ">CONTATTI</p>
        </div>
        <div class="containerResponsive">
            <img   @click="onHamburgerClick" class="cursor-pointer" src="/img/hamburgerMenu2.svg" alt="">
        </div>-->
    </div>
</template>

<style scoped>
.continerHeader {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    background-color: rgba(89, 139, 192, 0);
    z-index: 4;

}
.containerLogo{
    width: 100%;
    justify-content: start;
    display: flex;
}
.containerLogo img{
height: 60px;
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
    color: rgb(44, 89, 153);
}
.containerResponsive{
    display: none;
}
@media (max-width: 768px) {
    .continerHeader{
        padding: 10px;
    }
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