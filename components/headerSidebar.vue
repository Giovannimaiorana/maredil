<script lang="ts" setup>

const route = useRoute()

// Funzione che controlla se la rotta è attiva
const isActive = (path: string) => route.path === path
</script>

<template>
    <div class="continerHeader">
        <div class="containerMenu">
            <p class="text-white cursor-pointer font-bold">CHI SIAMO</p>
            <p class="text-white cursor-pointer font-bold">SERVIZI</p>
            <p class="text-white cursor-pointer font-bold">CONTATTI</p>
        </div>

    </div>
</template>
<style scoped>
.continerHeader{
    background-color: rgb(89, 138, 192);
    padding: 20px;
}
.containerMenu{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.containerMenu p:hover{
    color: rgb(44, 90, 153);
}
.containerMenu p{
    border-bottom: 1px solid white;
    padding-bottom: 10px;

}
.activeLanguage{
    color: #78f9ad;
}
</style>