<template>
  <div class="ml-auto mr-auto mt-20 w-96">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <div class="flex justify-center items-center my-6">
        <h3 class="text-lg text-orange-500">Login to <span class="text-blue-500">Shiki <span class="text-orange-600 px-0 mx-0">sh</span> a</span></h3>
      </div>
      <form>
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail1"
            class="form-label inline-block mb-2 text-gray-700"
            >Email address:</label
          >
          <input
          v-model="email"
            type="email"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <p v-if="emailError" class="text-red-600">Email is required</p>
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword1"
            class="form-label inline-block mb-2 text-gray-700"
            >Password:</label
          >
          <input
          v-model="password"
            type="password"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            id="exampleInputPassword1"
            placeholder="Password"
          />
          <p v-if="passwordError" class="text-red-600">Password is required</p>
        </div>
        <div class="form-group form-check mb-6">
          <input
            type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="exampleCheck1"
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="exampleCheck1"
            >Check me out</label
          >
        </div>
       <div class="flex justify-center items-center">
        <button
        @click="handleLogin"
        type="button"
        class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Login
      </button>
       </div>
      </form>
      <div class="flex justify-center items-center py-6">
        <nuxt-link to="/register"
        class="text-green-700 text-sm"
        
      >
        Don't have an account?
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout:"loginlay"
})

const email=ref(null)
const password=ref(null)
const emailError=ref(false)
const passwordError=ref(false)
const router=useRouter()

const handleLogin=async()=>{
  if(email.value && password.value){
    emailError.value=false
    passwordError.value=false
    await signIn(email.value,password.value)
    router.push('/home')
    console.log( email.value)
  }else{
    emailError.value=true
    passwordError.value=true
    console.log('fill out the empty values')
  }
}
</script>

<style lang="scss" scoped></style>
