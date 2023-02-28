<template>
    <div>
       <div class="w-1/2 ml-auto mr-auto mt-10">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
            <div class="flex justify-center items-center my-6">
              <h3 class="text-lg text-orange-500">Sign In to <span class="text-blue-500">Shiki <span class="text-orange-600 px-0 mx-0">sh</span> a</span></h3>
            </div>
            <form>
             <div class="flex justify-between items-center">
                <div>
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
                </div>
                <div>
                    <div class="form-group mb-6">
                        <label
                          for="exampleInputEmail1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Username:</label
                        >
                        <input
                        v-model="username"
                          type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  
                          placeholder="Enter username"
                        />
                        <p v-if="usernameError" class="text-red-600">Username is required</p>
                      </div>
                      <div class="form-group mb-6">
                        <label
                          for="exampleInputPassword1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Confirm Password:</label
                        >
                        <input
                        v-model="conpassword"
                          type="password"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                        <p v-if="conpasswordError" class="text-red-600">Password is required</p>
                      </div>
                </div>
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
              Sign up
            </button>
             </div>
            </form>
            <div class="flex justify-center items-center py-6">
              <nuxt-link to="/login"
              class="text-green-700 text-sm"
            >
              Already have an account?
            </nuxt-link>
            </div>
          </div>
       </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout:"loginlay"
})
const router=useRouter()
const email=ref(null)
const password=ref(null)
const username=ref(null)
const usernameError =ref(false)
const emailError=ref(false)
const passwordError=ref(false)
const conpassword=ref(null)
const conpasswordError=ref(false)

const handleLogin=async()=>{
  console.log("I've been tapped")
  if(email.value && username.value && password.value && conpassword.value){
    await signUp(email.value,password.value,username.value)
    router.push('/home')
    console.log("They have been filled")
  }else{
      usernameError.value=true
      emailError.value=true
      passwordError.value=true
      conpasswordError.value=true
    if(!email.value){
      usernameError.value=false
      emailError.value=true
      passwordError.value=false
      conpasswordError.value=false
      console.log("provide email")
    }
    if(!username.value){
      usernameError.value=true
      emailError.value=false
      passwordError.value=false
      conpasswordError.value=false
      console.log("Provide username")
    }
    if(!password.value){
      usernameError.value=false
      emailError.value=false
      passwordError.value=true
      conpasswordError.value=false
      console.log("provide password")
    }
    if(!conpassword.value){
      conpasswordError.value=true
      usernameError.value=false
      emailError.value=false
      passwordError.value=false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>