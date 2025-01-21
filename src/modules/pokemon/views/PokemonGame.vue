<template>
  <section v-if="false" class="flex flex-col justify-center items-center h-screen">
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">cargando Pokemons</h3>
  </section>

  <section class="flex flex-col justify-center items-center h-screen">
    <h1 class="m-5">Quien es ese Pokemon?</h1>
    <!-- Pokemon picture -->
    <PokemonPicture />

    <!-- Pokemon Options -->
    <GameOptions />
  </section>
</template>

<script lang="ts" setup>
import GameOptions from '../components/GameOptions.vue';
import PokemonPicture from '../components/PokemonPicture.vue';
import { usePokemonGame } from '../composables/usePokemonGame';

const { STATUS } = usePokemonGame();
</script>
