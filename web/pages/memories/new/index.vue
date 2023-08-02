<template>
  <div className="flex flex-1 flex-col gap-4 p-16">
    <NuxtLink
      href="/"
      class="flex items-center gap-1 text-sm text-gray-200 hover:text-gray-100"
    >
      <ChevronLeft class="h-4 w-4" />
      Voltar à timeline
    </NuxtLink>
    <NewMemoryForm />
  </div>
</template>

<script setup lang="ts">
import { ChevronLeft } from "lucide-vue-next";
</script>

<style scoped></style>
