<template>
  <button
    class="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
    @click="githubLogin()"
  >
    <div
      class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400"
    >
      <User class="h-5 w-5 text-gray-500" />
    </div>

    <p class="max-w-[140px] text-sm leading-snug">
      <span class="underline">Crie sua conta</span> e salve suas memórias!
    </p>
  </button>

  <!-- Alternative for button (environment variable wont be needed as public)  -->
  <!-- <a
    :href="`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`"
    class="flex items-center gap-3 text-left transition-colors hover:text-gray-50"
  >
    ...
  </a> -->
</template>

<script setup lang="ts">
import { User } from "lucide-vue-next";
// const { GITHUB_CLIENT_ID } = useRuntimeConfig();
</script>

<style scoped></style>
