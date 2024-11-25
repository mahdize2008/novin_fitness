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
  <li @click="$emit('changeFilter',filter)" class="lg:px-9 px-4 lg:h-11 h-8 flex items-center justify-center lg:rounded-xl rounded-lg lg:text-base text-xs-plus font-medium text-dark cursor-pointer hover:bg-primary/5 transition-all [&.active]:bg-primary [&.active]:text-white">
    <slot/>
  </li>
</template>