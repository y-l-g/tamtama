// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-studio',
    'motion-v/nuxt'
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

    studio: {
    route: '/_studio',
        repository: {
      provider: 'github',
      owner: 'y-l-g',
      repo: 'tamtama',
      branch: 'main',
    }
  }

})