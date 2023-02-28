<template>
    <div>
        <div class="w-3/4 ml-auto mr-auto mt-2 bg-blue-500 rounded-lg" >
            <CustomeCard image="https://cdn.pixabay.com/photo/2016/11/29/03/42/mic-1867121__340.jpg" title="Titlle" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English." :price="2000" />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout:"normal-lay"
})
</script>

<style lang="scss" scoped>

</style>