<template>
  <section>
    <div
      class="flex flex-col justify-center items-center bg-gray-100 p-12 mx-4 rounded-xl shadow-lg"
    >
      <img
        class="brightness-0 h-[200px] mb-8"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt=""
      />
      <img src="/src/assets/pokeball.svg" alt="pokeball" />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
img {
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
</style>
