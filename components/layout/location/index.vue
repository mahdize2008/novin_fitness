<script setup>
let {items}=defineProps({
    items:{
        type:String
    }
})
</script>

<template>
  <ul class="container flex items-center">
    <li
      class="ml-6 last:ml-0 relative after:top-1/2 last:after:hidden after:-left-3 after:content-['\e90a'] after:text-2xs after:font-bold after:text-dark after:font-['icomoon'] after:absolute after:-translate-y-1/2 after:-translate-x-1/2 last:pointer-events-none"
    >
      <NuxtLink
        to="/calculator"
        class="text-sm flex items-center hover:text-primary text-dark"
      >
        <GenericIcon name="house" class="text-base ml-2" />
        نوین فیتنس
      </NuxtLink>
    </li>
    <li v-for="(item , index) in items" :key="index" class="ml-6 last:ml-0 relative after:top-1/2 last:after:hidden after:-left-3 after:content-['\e90a'] after:text-2xs after:font-bold after:text-dark after:font-['icomoon'] after:absolute after:-translate-y-1/2 after:-translate-x-1/2 last:pointer-events-none">
      <NuxtLink :to="item?.to" class="text-sm flex items-center hover:text-primary text-dark">
        {{item.title}}
      </NuxtLink>
    </li>
  </ul>
</template>
