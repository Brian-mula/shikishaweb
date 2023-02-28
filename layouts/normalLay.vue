<template>
    <div class="flex">
        <div class="w-56 h-fit bg-blue-600 sticky top-0">
           <Sidenav/>
        </div>
        <div class="w-full px-2">
            <HomeNav/>
            <slot/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>