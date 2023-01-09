<template>
    <div>
      <nav class=" w-full flex items-center justify-between bg-white p-6">
        <nuxt-link to="/home" class="flex items-center flex-shrink-0 text-gray-600 mr-6">
          <img
            src="~assets/images/shikishika_logo.svg"
            class="h-8 w-8 rounded-full"
            alt=""
          />
          <span class="font-semibold text-md tracking-tight px-2">SHIKISHA</span>
        </nuxt-link>
       
        <div>
            <button
            @click="handleLogout"
            type="button"
            class="inline-block text-sm px-4 py-2 leading-none border rounded bg-orange-500 text-white border-white hover:border-transparent hover:text-white hover:bg-orange-600 mt-4 lg:mt-0"
            >Logout</button
          >
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
  const router=useRouter()
const handleLogout=async()=>{
  await logOut()
  router.push('/')

}

  </script>
  
  <style lang="scss" scoped></style>
  