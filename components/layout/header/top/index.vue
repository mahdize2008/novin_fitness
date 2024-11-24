<script setup>
let navItems = [
    {
        to:'/',
        text:'خانه'
    },
    {
        to:'/',
        text:'خانه'
    },
    {
        to:'/',
        text:'خانه'
    },
    {
        to:'/',
        text:'خانه'
    },
    {
        to:'/',
        text:'خانه'
    },
    {
        to:'/',
        text:'خانه'
    },
]
</script>

<template>
  <div class="container flex items-center py-14">
    <NuxtLink to="/">
        <GenericIcon name="list" class="text-white text-base font-bold"/>
    </NuxtLink>
    <NuxtLink class="block md:ml-20 max-md:mr-auto" to="/">
        <img src="/img/logo.png" class="max-w-[125px]">
    </NuxtLink>
    <LayoutHeaderNavbar :items='navItems' class="max-md:hidden"/>
    <NuxtLink to="/" class="bg-dark border-white text-white border-[6px] flex items-center justify-center rounded-full w-11 h-11 mr-auto">
        <GenericIcon name="user"/>
    </NuxtLink>
  </div>
</template>

<style>

</style>