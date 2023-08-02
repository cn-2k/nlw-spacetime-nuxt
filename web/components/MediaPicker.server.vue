<template>
  <input
    id="media"
    type="file"
    name="coverUrl"
    accept="image/*"
    class="invisible h-0 w-0"
    @change="onFileSelected"
  />
  <img
    :src="preview"
    alt=""
    className="aspect-video w-full rounded-lg object-cover"
  />
</template>

<script setup lang="ts">
const preview = ref<string | undefined>(undefined);

const onFileSelected = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;

  if (!files) {
    return;
  }

  const previewURL = URL.createObjectURL(files[0]);

  preview.value = previewURL;
};
</script>

<style scoped></style>
