<template>
    <div>
        <nav class="flex items-center justify-between flex-wrap bg-white p-6">
            <div class="flex items-center flex-shrink-0 text-gray-600 mr-6">
              <img src="~assets/images/shikishika_logo.svg" class="h-8 w-8 rounded-full" alt="">
              <span class="font-semibold text-md tracking-tight">SHIKISHA</span>
            </div>
            <div class="block lg:hidden">
              <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div class="w-full flex flex-grow lg:flex lg:items-center lg:w-auto lg:justify-between">
              <div class="text-sm lg:flex-grow lg:justify-between">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-orange-600 mr-4">
                  Home
                </a>
                <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-orange-600 mr-4">
                  Our Services
                </nuxt-link>
                <nuxt-link to="/about" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-orange-600 mr-4">
                  About us
                </nuxt-link>
                <nuxt-link to="/contact" class="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-orange-600 mr-4">
                    Contact us
                  </nuxt-link >
              </div>
              <div>
                <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded bg-orange-500 text-white border-white hover:border-transparent hover:text-white hover:bg-orange-600 mt-4 lg:mt-0">Get Started</a>
              </div>
            </div>
          </nav>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>