<script setup>
let {to,text,iconName,theme}=defineProps({
    to:{
        type:String,
    },
    text:{
        type:String,
    },
    iconName:{
        type:String
    },
    theme:{
        type:String,
        default:'white'
    }
})
</script>

<template>
    <NuxtLink :to="to" class="flex items-center px-2 py-1 text-white lg:text-base text-sm font-medium leading-none hover:!text-secondary" :class="`theme-${theme}`">
        <GenericIcon :name="iconName" v-if="iconName" class="ml-1.5 font-bold mb-0.5"/>
        {{text}}
    </NuxtLink>
</template>

<style scoped>
.theme-white{
    @apply text-white
}
.theme-dark{
    @apply text-dark
}
</style>