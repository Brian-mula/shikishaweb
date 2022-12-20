<template>
    <div class="h-screen">
        <Navbar/>
        <div class="pl-36 ">
            <slot/>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
.screenh{
    height: calc(100vh-theme('spacing.12'));
}
</style>