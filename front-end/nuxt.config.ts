// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: process.env.API_KEY || '',
    serviceDomain: process.env.SERVICE_DOMAIN || ''
  }
})
