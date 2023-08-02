<template>
  <!-- TODO: FIX Failed to fetch dynamically imported module when go back for index page -->
  <main class="grid min-h-screen grid-cols-2">
    <!-- Left -->
    <div
      class="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(~/assets/bg-stars.svg)] bg-cover px-28 py-16"
    >
      <!-- Blur -->
      <div
        class="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full"
      />

      <!-- Stripes -->
      <div class="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />

      <!-- SignIn/Profile -->
      <SignIn v-if="!isAuthenticated" />
      <ProfileSection v-if="isAuthenticated" />

      <!-- Hero -->
      <HeroSection />

      <!-- Copyright -->
      <CopyrightSection />
    </div>

    <!-- Right -->
    <div
      class="flex max-h-screen flex-col overflow-y-scroll bg-[url(~/assets/bg-stars.svg)] bg-cover"
    >
      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
const isAuthenticated = useCookie("token");
</script>

<style lang="postcss">
body {
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  @apply bg-gray-900 text-gray-100;
}
</style>
