<template>
    <div>
       <div class="flex justify-between">
        <div class="w-1/2 ">
            <h4 class="text-2xl text-gray-800 mt-10 font-bold mb-10">Welcome to shikisha</h4>
            <h4 class="font-semibold text-gray-800 text-2xl">Making our market <br> able to sell and buy mostly second <br> hand goods</h4>
            <p class="py-6 font-normal text-gray-500 font-md">We make sure the buyer get the right <br> product and seller to get customers for his goods</p>
        </div>
        <div class="bg-orange-400  w-1/2" id="hscreen">
            <img src="~/assets/images/service.jpg" class="h-full" alt="">
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
  height: calc(100vh - 5rem);
}
</style>