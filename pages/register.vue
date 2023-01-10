<template>
    <div>
       <div class="w-1/2 ml-auto mr-auto mt-10">
        <div class="block p-6 rounded-lg shadow-lg bg-white w-full">
            <div class="flex justify-center items-center my-6">
              <h3 class="text-lg text-orange-600">Sign In to <span class="text-blue-500">Shikisha</span></h3>
            </div>
            <form>
             <div class="flex justify-between items-center">
                <div>
                    <div class="form-group mb-6">
                        <label
                          for="exampleInputEmail1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >First Name:</label
                        >
                        <input
                        v-model="first_name"
                          type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          placeholder="Enter first name"
                        />
                        <p v-if="firstNameError" class="text-red-600">First Name is required</p>
                      </div>
                      <div class="form-group mb-6">
                        <label
                          for="exampleInputPassword1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Email:</label
                        >
                        <input
                        v-model="email"
                          type="email"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          
                          placeholder="Email"
                        />
                        <p v-if="emailError" class="text-red-600">Email is required</p>
                      </div>
                </div>
                <div>
                    <div class="form-group mb-6">
                        <label
                          for="exampleInputEmail1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Second Name:</label
                        >
                        <input
                        v-model="second_name"
                          type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          
                          
                          placeholder="Enter Second name"
                        />
                        <p v-if="seconNameError" class="text-red-600">Second name is required</p>
                      </div>
                      <div class="form-group mb-6">
                        <label
                          for="exampleInputPassword1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Phone:</label
                        >
                        <input
                        v-model="phone"
                          type="tel"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          
                          placeholder="Enter phone"
                        />
                        <p v-if="phoneError" class="text-red-600">Phone is required</p>
                      </div>
                </div>
                
             </div>
             <div class="flex justify-between items-center">
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
                       <div class="form-group mb-6">
                        <label
                          for="exampleInputPassword1"
                          class="form-label inline-block mb-2 text-gray-700"
                          >Confirm Password:</label
                        >
                        <input
                        v-model="conPass"
                          type="password"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                        <p v-if="confPassError" class="text-red-600">Password is required</p>
                      </div>
                </div>
                <p v-if="passwordsError" class="text-red-600">The passwords don not match, please review</p>
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
              @click="handleSignUp"
              type="button"
              class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign Up
            </button>
             </div>
            </form>
            <div class="flex justify-center items-center py-6">
              <nuxt-link to="/login"
              
              class="px-6 py-2.5  text-blue-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Already Have an Account??
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
const first_name=ref(null)
const second_name=ref(null)
const email=ref(null)
const phone=ref(null)
const password=ref(null)
const conPass=ref(null)
const firstNameError=ref(false)
const emailError=ref(false)
const seconNameError=ref(false)
const phoneError=ref(false)
const passwordError=ref(false)
const confPassError=ref(false)
const passwordsError=ref(false)

const handleSignUp=async()=>{
  if(first_name.value && second_name.value && email.value && phone.value && password.value && conPass.value){
    firstNameError.value=false
    seconNameError.value=false
    emailError.value=false
    passwordError.value=false
    confPassError.value=false
    phoneError.value=false

    if(conPass.value != password.value){
      passwordsError.value=true
    }
    console.log("Submitted")
  }else{
    if(!first_name.value){
      firstNameError.value=true
    }
    if(!second_name.value){
      seconNameError.value=true
    }
    if(!email.value){
      emailError.value=true
    }
    if(!password.value){
      passwordError.value=true
    }
    if(!conPass.value){
      confPassError.value=true
    }
    if(!phone.value){
      phoneError.value=true
    }
  }
}





</script>

<style lang="scss" scoped>

</style>