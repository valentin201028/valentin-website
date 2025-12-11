// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  srcDir: "app/",
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
    strategy: "prefix_except_default",
  },
});
