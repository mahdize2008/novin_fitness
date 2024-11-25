<script setup>
let {to,text}=defineProps({
    to:{
        type:String,
    },
    text:{
        type:String,
    },
})
</script>

<template>
    <NuxtLink :to="to" class="px-2 py-1 text-white lg:text-base text-sm font-semibold hover:text-secondary">
        {{text}}
    </NuxtLink>
</template>

<style>

</style>