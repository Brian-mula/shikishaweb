<template>
    <div>
       <div class="flex justify-between">
        <div class="w-1/2 ">
            <h4 class="text-2xl mt-24 text-orange-600 font-bold mb-10">Contact us</h4>
            <h3 class="text-3xl  font-bold tracking-wider text-gray-800">Contact our support <br> and our team</h3>
            <p class="text-sm mt-10 ">Email: <span class="text-orange-600">shikishamarket@gmail.com</span>/ <span class="text-orange-500">luttabrooks@gmail.com</span></p>
            <p class="text-sm mt-3">Phone: <span class="text-orange-500">+254759753332</span></p>
        </div>
        <div class=" w-1/2 mt-24" id="hscreen">
            <img src="~/assets/images/contact.jpg" class="h-2/3 w-1/2 rounded-full" alt="">
        </div>
       </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:"default"
})

</script>

<style lang="css" scoped>
#hscreen{
  height: calc(100vh - 11rem);
}
</style>