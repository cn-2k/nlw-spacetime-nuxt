<template>
  <div class="flex items-center gap-3 text-left">
    <nuxt-img
      :src="avatarUrl"
      alt="NLW Spacetime Logo"
      class="h-10 w-10 rounded-full"
    />

    <p class="max-w-[140px] text-sm leading-snug">
      {{ name }}
      <button
        class="block cursor-pointer text-red-400 hover:text-red-300"
        @click="githubLogout()"
      >
        Quero sair
      </button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { getUser } from "@/utils/auth";

const { name, avatarUrl } = getUser();
</script>

<style scoped></style>
