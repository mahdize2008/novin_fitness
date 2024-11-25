<script setup>
let {isActive}=defineProps({
    isActive:{
        type:Boolean,
        default:false
    }
})
</script>

<template>
  <div class="fixed z-40 top-0 right-0 bg-dark/70 w-full h-full transition-all duration-300" @click="$emit('tochBackground')" :class="{'hidden opacity-0' : !isActive}"></div>
</template>