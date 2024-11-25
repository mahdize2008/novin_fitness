<script setup>
let {title,subtitle,center}=defineProps({
    title:{
        type:String
    },
    subtitle:{
        type:String
    },
    center:{
        type:Boolean,
        default:false
    }
})
</script>

<template>
  <div :class="{'text-center':center}">
    <GenericTitle size="lg" :class="{'justify-center':center}">
      {{title}}
    </GenericTitle>
    <div class="text-dark lg:text-base text-xs font-medium mt-2" v-if="subtitle">
      {{subtitle}}
    </div>
  </div>
</template>

<style>
</style>