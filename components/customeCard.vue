<template>
    <div>
        
<div class="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img class="rounded-t-lg h-96 w-full " :src="image" alt="" />
   
    <div class="p-5">
      
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{title}}</h5>
       
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{description}}</p>
        <div class="flex justify-between items-center">
            <p class="text-green-700 text-lg">Price: Ksh. {{price}}</p>
        </div>
    </div>
</div>

    </div>
</template>

<script setup lang="ts">
defineProps({
    image:String,
    title:String,
    price:Number,
    description:String
})
</script>

<style lang="scss" scoped>

</style>