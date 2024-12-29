<script setup>
let {isActive,question,answer,id}=defineProps({
    isActive:{
        type:Boolean,
        default:false
    },
    question:{
        type:String
    },
    answer:{
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
      {{ question }}
      <GenericIcon class="mr-auto text-dark lg:text-2xs text-3xs !font-bold" :name="isActive ? 'up' : 'down'" />
    </div>
    <p v-if="answer && answer?.length" class="lg:px-7 p-4 lg:pb-6 lg:pt-2 pt-0 lg:text-sm text-2xs text-dark font-medium hidden group-[&.active]:block transition-all">
        {{ answer }}
    </p>
  </li>
</template>

<style>
</style>