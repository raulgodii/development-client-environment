<script setup>
  import { ref } from 'vue';
import cabecera from './components/cabecera.vue';
  import cuerpo from './components/cuerpo.vue';

  let listaNotas = ref([]);

  function reciboNota (nota){
    listaNotas.value.push(nota)
  }
</script>

<template>
  <header>

    <div class="wrapper">

      <cabecera @nueva-nota="reciboNota"></cabecera>
      <cuerpo :listaNotas="listaNotas"></cuerpo>
      
    </div>
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
