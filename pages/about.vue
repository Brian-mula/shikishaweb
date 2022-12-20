<template>
    <div>
       <div class="flex justify-between">
        <div class="w-1/2 ">
            <h4 class="text-2xl text-gray-800 mt-10 font-bold mb-10">About us</h4>
            
            <p class="py-6 font-normal text-gray-500 font-md tracking-wider "> It is our online platform that provides <br> you with the ability to buy and sell goods. <br> Our vision is to provide the buyer with <br> the market to buy the products and <br> the seller to sell. Our mission is to make market <br> the best market possible</p>
        </div>
        <div class=" w-1/2 mt-24" id="hscreen">
            <img src="~/assets/images/about.jpg" class="h-2/3 w-1/2 rounded-full" alt="">
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