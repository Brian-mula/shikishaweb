// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      "~/assets/css/style.css",
      '@fortawesome/fontawesome-svg-core/styles.css'
  
  ],
    buildModules:[
      '@nuxt/postcss8',
    ],
    build: {
      transpile:[
        '@fortawesome/vue-fontawesome',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/pro-solid-svg-icons',
        
      ],
    
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  });
