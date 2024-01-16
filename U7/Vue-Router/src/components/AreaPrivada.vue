<script setup>
    import { useRouter, useRoute } from 'vue-router';


    const router = useRouter();
    const route = useRoute();

    console.log("RECIBO idUsuario = ", route.params.idUsuario);

    function cerrarSesion() {
        router.push("/");
    }
</script>

<template>
    <h1>Area Privada</h1>
    <p>Esto es el componente area privada</p>
    <button @click="cerrarSesion">Cerrar Sesión</button>
</template>