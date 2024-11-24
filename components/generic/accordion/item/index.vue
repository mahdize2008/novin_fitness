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
    <div class="flex items-center text-dark text-base font-medium px-7 py-4 cursor-pointer" @click="$emit('changeAccordion',id)">
      <GenericIcon name="list-active" :pathCount="5" class="ml-2 text-5xl" />
      لورم ایپسوم
      <GenericIcon class="mr-auto text-dark text-2xs !font-bold" :name="isActive ? 'up' : 'down'" />
    </div>
    <p class="px-7 pb-6 pt-2 text-sm text-dark font-medium hidden group-[&.active]:block transition-all">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
    </p>
  </li>
</template>

<style>
</style>