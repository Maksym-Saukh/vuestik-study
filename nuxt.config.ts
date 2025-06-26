// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@vuestic/nuxt'],
  vuestic: {
    config: {
      // Тут можна додати глобальні налаштування Vuestic
    },
    css: ['typography', 'reset']
  },
  components: true
})
