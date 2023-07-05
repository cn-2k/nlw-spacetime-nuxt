// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          "Roboto+Flex": {
            wght: [100, 200, 300, 400, 500, 600, 700],
          },
          "Bai+Jamjuree": {
            wght: [700],
          },
        },
      },
    ],
    "@nuxt/image",
  ],
});
