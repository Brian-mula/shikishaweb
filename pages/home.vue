<template>
    <div>
        

        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-500 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white " placeholder="Search for products...">
    

        <div class="grid grid-cols-3 gap-3 m-4">
            
<div v-for="(product, index) in products" :key="index" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" :src="product.image" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{product.title}}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{product.description}}</p>
        <div class="flex justify-between items-center">
            <p class="text-md text-gray-700">Ksh. {{product.price}}</p>
            <nuxt-link :to="{name:'product-id',params:{id:product.id}}" href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </nuxt-link>
        </div>
       
    </div>
</div>

        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:"normal-lay"
})

const products=ref([
    {
        id:111,
        image:"https://cdn.pixabay.com/photo/2017/08/06/16/30/computer-2593921__340.jpg",
        title:"Computer desktop",
        price: 30000,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

    },
    {
        id:112,
        image:"https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121__340.jpg",
        title:"Gaming pad",
        price: 3000,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

    },
    {
        id:113,
        image:"https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876__340.jpg",
        title:"Lenovvo laptop",
        price: 47000,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

    },
    {
        id:114,
        image:"https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821__340.jpg",
        title:"Hp convertible laptop",
        price: 3000,
        description: " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

    },
    {
        id:115,
        image:"https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121__340.jpg",
        title:"Gaming pad",
        price: 3000,
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

    },
])
</script>

<style lang="scss" scoped>

</style>