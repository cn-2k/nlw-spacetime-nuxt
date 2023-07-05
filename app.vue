<template>
  <main class="grid min-h-screen grid-cols-2">
    <!-- Left -->
    <div
      class="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16"
    >
      <!-- Blur -->
      <div
        class="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"
      />

      <!-- Stripes -->
      <div class="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

      <!-- Sign In -->
      <a
        href=""
        class="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
      >
        <div
          class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400"
        >
          <User class="h-5 w-5 text-gray-500"></User>
        </div>

        <p class="max-w-[140px] text-sm leading-snug">
          <span class="underline">Crie sua conta</span> e salve suas memórias!
        </p>
      </a>

      <!-- Hero -->
      <div class="space-y-5">
        <nuxt-img src="/nlw-spacetime-logo.svg" alt="NLW Spacetime Logo" />

        <div class="max-w-[420px] space-y-4">
          <h1 class="text-5xl font-bold leading-tight text-gray-50">
            Sua cápsula do tempo
          </h1>
          <p class="text-lg leading-relaxed">
            Colecione momentos marcantes da sua jornada e compartilhe (se
            quiser) com o mundo!
          </p>
        </div>
        <a
          class="inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-green-600"
          href=""
        >
          CADASTRAR LEMBRANÇA
        </a>
      </div>

      <!-- Copyright -->
      <div class="text-sm leading-relaxed text-gray-200">
        Feito com 💜 no NLW da
        <a
          target="_blank"
          rel="noreferrer"
          class="underline hover:text-gray-100"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </div>
    </div>

    <!-- Right -->
    <div class="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
      <div class="flex flex-1 items-center justify-center">
        <p class="w-[360px] text-center leading-relaxed">
          Você ainda não registrou nenhuma lembrança, comece a
          <a href="" class="underline hover:text-gray-50"> criar agora</a>!
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { User } from "lucide-vue-next";
</script>

<style lang="postcss">
body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  @apply bg-gray-900 text-gray-100;
}
</style>
