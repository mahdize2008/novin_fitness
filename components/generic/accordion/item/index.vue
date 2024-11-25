<script setup>
let {isActive,title,text,id}=defineProps({
    isActive:{
        type:Boolean,
        default:false
    },
    title:{
        type:String
    },
    text:{
        type:String
    },
    id:{
        type:Number
    }
})
</script>

<template>
  <li class="bg-white shadow-lighter-shadow rounded-xl group" :class="{'active':isActive}">
    <div class="flex items-center text-dark lg:text-base text-xs font-medium lg:px-7 px-4 py-4 cursor-pointer" @click="$emit('changeAccordion',id)">
      <GenericIcon name="list-active" :pathCount="5" class="ml-2 lg:text-5xl text-base" />
      لورم ایپسوم
      <GenericIcon class="mr-auto text-dark lg:text-2xs text-3xs !font-bold" :name="isActive ? 'up' : 'down'" />
    </div>
    <p class="lg:px-7 p-4 lg:pb-6 lg:pt-2 pt-0 lg:text-sm text-2xs text-dark font-medium hidden group-[&.active]:block transition-all">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
    </p>
  </li>
</template>

<style>
</style>