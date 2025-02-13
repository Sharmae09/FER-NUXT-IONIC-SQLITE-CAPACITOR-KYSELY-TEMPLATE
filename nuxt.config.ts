// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  target: "static",
  ssr: false,
  css: ["@ionic/vue/css/core.css"],
});
