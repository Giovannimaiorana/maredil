<script lang="ts" setup>
import footerComponent from '~/components/footer.vue';
import serviziComponent from '~/components/serviziComponent.vue';
import chisiamoComponent from '~/components/chisiamoComponent.vue';
import contactComponent from '~/components/contactComponent.vue';
</script>

<template>
    <div class="wrapperHome">
        <div class="overlay"></div>
        <div class="containerText">
            <p class="font-mar  text-6xl md:text-9xl  text-center text-white">MAREDIL</p>
            <p class=" font-bold mottoStyle text-xs md:text-xl text-white text-center">Costruiamo qualità, rinnoviamo il tuo spazio</p>
        </div>
    </div>
    <div class="containerdescription">
        <serviziComponent/>
    </div>
    <div class="containerChisiamo">
        <chisiamoComponent/>
    </div>
    <div class="containerContact">
        <contactComponent/>
    </div>

</template>

<style scoped>
.wrapperHome{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(/img/jumbotron2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
}
.personalized{
    background: linear-gradient(to right, white, rgb(44, 90, 153));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.containerdescription{
    width: 100%;
    height: auto;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgb(89, 139, 192) 100%);
}
.containerChisiamo{
    width: 100%;
    height: auto;
    background: linear-gradient(to top, rgb(0, 0, 0)0%, rgb(89, 139, 192) 100%); 
    padding-bottom: 50px;
 
}
.containerContact{
    width: 100%;
    height: auto;
}
.overlay{
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 1) 100%);
    z-index: 7;
}
.containerText{
    z-index: 10;
}
.mottoStyle{
    letter-spacing: 2px;
}
</style>