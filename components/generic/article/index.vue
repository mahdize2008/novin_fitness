<script setup>
let { to, picture, title, description, created_at, view, author } = defineProps({
  to: {
    type: String,
  },
  picture: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  created_at: {
    type: String,
  },
  view: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink class="block bg-white rounded-2.5xl overflow-hidden shadow-lighter-shadow" :to="`/articles/${to}`">
    <img :src="picture" class="w-full lg:h-[173px] h-[150px]" alt="">
    <div class="p-4">
        <h2 v-if="title && title?.length" class="lg:text-sm text-xs font-semibold lg:h-[42px] h-[36px] line-clamp-2 lg:mb-2.5 mb-1.5">
            {{title}}
        </h2>
        <p v-if="description && description?.length" class="lg:text-xs text-3xs text-dark/70 font-medium lg:h-[54px] h-[45px] lg:mb-5 mb-3 line-clamp-3">
            {{description}}
        </p>
        <ul class="flex items-center">
            <li v-if="created_at && created_at?.length" class="flex items-center lg:text-2xs text-4xs text-dark leading-none ml-3 last:ml-0">
                <GenericIcon name="calendar" class="lg:text-xs-plus text-2xs ml-1"/>
                {{created_at}}
            </li>
            <li v-if="view && answer?.length" class="flex items-center lg:text-2xs text-4xs text-dark leading-none ml-3 last:ml-0">
                <GenericIcon name="show" class="lg:text-xs-plus text-2xs ml-1"/>
                {{view}} بازدید
            </li>
        </ul>
    </div>
  </NuxtLink>
</template>

<style>
</style>