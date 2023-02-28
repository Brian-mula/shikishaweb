<template>
  <div>
    <aside class="w-56 h-screen" aria-label="Sidebar">
      <div
        class="px-3 py-4 overflow-y-auto bg-blue-600 h-screen flex flex-col justify-between"
      >
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <font-awesome-icon icon="fa-solid fa-globe" />
              <span class="ml-3">Dashboard</span>
            </a>
          </li>
          <li>
            <nuxt-link
              to="/products"
              class="flex items-center p-2 text-base font-normal hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
            <font-awesome-icon icon="fa-solid fa-shopping-bag" />
              
              <span class="flex-1 ml-3 whitespace-nowrap">Products</span>
            </nuxt-link>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <font-awesome-icon icon="fa-solid fa-list-check" class="hover:text-gray-800"/>
              <span class="flex-1 ml-3 whitespace-nowrap">Categories</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-normal hover:text-gray-900 rounded-lg text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
            <font-awesome-icon icon="fa-solid fa-user" />
              <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
            </a>
          </li>
         
        </ul>
        <div class="flex flex-col justify-end">
          <ul
          class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          
         
          <li >
            <button
              type="button"
              class="flex items-center p-2 text-base font-normal text-gray-100 hover:text-gray-800 transition duration-75 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
             
              <span class="ml-3">Sign Out</span>
            </button>
          </li>
        </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
