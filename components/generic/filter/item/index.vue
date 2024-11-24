<script setup>
let {isActive}=defineProps({
    isActive:{
        type:Boolean,
        default:false
    },
    filter:{
        type:String
    }
})

</script>

<template>
  <li @click="$emit('changeFilter',filter)" class="px-9 h-11 flex items-center justify-center rounded-xl text-base font-medium text-dark cursor-pointer hover:bg-primary/5 transition-all [&.active]:bg-primary [&.active]:text-white">
    <slot/>
  </li>
</template>