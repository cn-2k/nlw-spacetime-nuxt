<template>
  <EmptyMemories v-if="!token" />
  <div v-else class="flex flex-col gap-10 p-8">
    <div v-for="memory in memories" :key="memory.id">
      <div class="space-y-4">
        <time
          class="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50"
        >
          {{ dayjs(memory.createdAt).format("D[ de ]MMMM[, ]YYYY") }}
        </time>
        <nuxt-img
          :src="memory.coverUrl"
          alt=""
          width="592"
          height="280"
          class="rouded-lg aspect-video w-full object-cover"
        />
        <p class="text-lg leading-relaxed text-gray-100">
          {{ memory.excerpt }}
        </p>
        <NuxtLink
          :href="`/memories/${memory.id}`"
          class="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
        >
          Ler mais <ArrowRight class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
import { api } from "@/utils/api";
const token = useCookie("token").value;
const dayjs = useDayjs();

interface Memory {
  id: string;
  coverUrl: string;
  excerpt: string;
  createdAt: string;
}

const memories = ref<Memory[]>();

if (token) {
  const response = await api.get("/memories", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  memories.value = response.data;
}
</script>
