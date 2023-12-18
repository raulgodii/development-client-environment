<script setup>
    import { ref } from 'vue';
    const lanzaEvento = defineEmits(['nuevaNota']);

    let nota = ref("");

    function nuevaNota(){
        lanzaEvento("nuevaNota", nota.value);
        //console.log(nota)
    }
</script>

<template>
    {{ nota }}
    <input type="text" name="" id="" v-model="nota">
    <button @click="nuevaNota">Alta nota</button>
</template>

<style>

</style>
