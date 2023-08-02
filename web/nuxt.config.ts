// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  experimental: {
    componentIslands: true,
  },
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
    [
      "dayjs-nuxt",
      {
        locales: ["en", "fr", "pt-br"],
        defaultLocale: "pt-br",
      },
    ],
  ],
  runtimeConfig: {
    // GITHUB_CLIENT_ID: "",
    public: {
      github: {
        clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      },
    },
    // secrets environment variables here
  },
});
