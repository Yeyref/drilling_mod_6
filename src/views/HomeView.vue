<template>
  <div class="home">
    <HelloWorld msg="Lista de juegos disponibles"/>
    <CardsComponent/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import CardsComponent from '@/components/CardsComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    CardsComponent,
  }
}
</script>
