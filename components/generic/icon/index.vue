<script setup>
let {name,pathCount}=defineProps({
    name:{
        type:String,
    },
    pathCount:{
        type:Number,
        default:0
    }
})
</script>

<template>
  <i :class="`icon-${name}`">
    <span v-for="(number , index) in pathCount" :class="`path${number}`" :key="index"></span>
  </i>
</template>

<style>
@import 'style.css';
</style>