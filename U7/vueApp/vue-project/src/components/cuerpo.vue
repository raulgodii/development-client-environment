<script setup>
    defineProps(['listaNotas']);
</script>

<template>
    Recibo como atributo prueba = {{ listaNotas }}
    <ul >
        <li v-for="nota in listaNotas">{{nota}}</li>
    </ul>
</template>