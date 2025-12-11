// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  devServer: {
    host: "0.0.0.0",
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "hu",
        iso: "hu-HU",
        file: "hu.ts",
      },
    ],
    langDir: "locales",
    defaultLocale: "hu",
    pages: {
      index: {
        //en: '/',
        hu: "/",
      },
    },
  },
});
