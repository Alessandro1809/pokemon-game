<template>
  <section class="mt-5">
    <ul>
      <div class="grid md:grid-cols-2 gap-4 grid-cols-1">
        <li>Pokemon 1</li>
        <li>Pokemon 2</li>
        <li>Pokemon 3</li>
        <li>Pokemon 4</li>
      </div>
    </ul>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
li {
  @apply bg-white shadow-md rounded-lg p-3  cursor-pointer w-40 mx-4 text-center transition-all duration-300 hover:bg-rose-400 hover:shadow-lg hover:text-white hover:scale-105;
  font-family: sans-serif;
}
</style>
