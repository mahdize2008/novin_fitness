<script lang="ts" setup>
let {items}=defineProps({
    items:{
        type:Array
    }
})
</script>

<template>
  <ul class="flex items-center">
    <li class="ml-8 last:ml-0" v-for="(item , index) in items" :key="index">
        <LayoutHeaderNavbarItem :text="item.text" :to="item.to"/>
    </li>
  </ul>
</template>