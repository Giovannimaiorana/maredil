<script lang="ts" setup></script>

<template>
    <div class="wrapperFooter">

            <div class="containerLogo">
                <img src="/img/logoMaredil.svg" alt="">
            </div>
            <div class="containerSocial">
                <img class="cursor-pointer" src="/img/instagramIcon.svg" alt="">
                <img class="cursor-pointer" src="/img/facebookIcon.svg" alt="">
            </div>
            <div class="containerInformation">
                <p class="font-bold text-xs text-center">Contrada la Torre 6 SUBIACO 00028 Rm</p>
                <p class="font-bold text-xs text-center">Mail: maredilcostruzioni17@gmail.com</p>
                <p class="font-bold text-xs text-center">Pec: maredilcostruzioni@legalmail.it</p>
                <p class="font-bold text-xs text-center">Tel +39 3278210185 </p>
                <p class="font-bold text-xs text-center">P.iva 15761541000</p>
                <p class="font-bold text-xs text-center">C.univ. M5UXCR1</p>
                <p class="font-bold  text-xs text-center underline cursor-pointer">Privacy Policy</p>
             
            </div>


    </div>
    
</template>

<style scoped>
.wrapperFooter{
    width: 100%;
    height: 300px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.containerLogo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.containerLogo img{
    height: 100px;
}
.containerSocial{
    display: flex;
    justify-content: center;
}
.containerSocial img{
    height: 60px;
}
.containerInformation{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>