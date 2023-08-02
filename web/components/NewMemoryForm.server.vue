<template>
  <form class="flex flex-1 flex-col gap-2" @submit.prevent="handleCreateMemory">
    <div class="flex items-center gap-4">
      <label
        for="media"
        class="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
      >
        <Camera class="h-4 w-4" />
        Anexar mídia
      </label>
      <label
        for="isPublic"
        class="flex items-center gap-1.5 text-sm text-gray-200 hover:text-gray-100"
      >
        <input
          id="isPublic"
          type="checkbox"
          name="isPublic"
          value="true"
          class="h-4 w-4 rounded border-gray-400 bg-gray-700 text-purple-500"
        />
        Tornar memória pública
      </label>
    </div>
    <MediaPicker />
    <textarea
      name="content"
      spellCheck="false"
      class="w-full flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 placeholder:text-gray-400 focus:ring-0"
      placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar sempre."
    ></textarea>

    <button
      type="submit"
      class="inline-block self-end rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600"
    >
      Salvar
    </button>
  </form>
</template>

<script setup lang="ts">
import { Camera } from "lucide-vue-next";
import { api } from "@/utils/api";

const router = useRouter();

const handleCreateMemory = async (event: Event) => {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;

  const formData = new FormData(form);

  const fileToUpload = formData.get("coverUrl");

  let coverUrl = "";

  if (fileToUpload) {
    const uploadFormData = new FormData();
    uploadFormData.set("file", fileToUpload);

    const uploadResponse = await api.post("/upload", uploadFormData);

    coverUrl = uploadResponse.data.fileUrl;
  }

  const token = useCookie("token").value;

  await api.post(
    "/memories",
    {
      coverUrl,
      content: formData.get("content"),
      isPublic: formData.get("isPublic"),
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  router.push({ path: "/" });
};
</script>

<style scoped></style>
