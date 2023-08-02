<template>
  <div class="space-y-5">
    <nuxt-img src="/nlw-spacetime-logo.svg" alt="NLW Spacetime Logo" />

    <div class="max-w-[420px] space-y-4">
      <h1 class="text-5xl font-bold leading-tight text-gray-50">
        Sua cápsula do tempo
      </h1>
      <p class="text-lg leading-relaxed">
        Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
        com o mundo!
      </p>
    </div>
    <NuxtLink
      class="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
      href="http://localhost:3000/memories/new"
    >
      CADASTRAR LEMBRANÇA
    </NuxtLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
