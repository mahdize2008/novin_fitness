<script setup>
let {items,theme}=defineProps({
    items:{
        type:Array
    },
    theme:{
        type:String,
        default:'white'
    }
})
</script>

<template>
  <ul class="flex items-center">
    <li class="ml-8 last:ml-0" v-for="(item , index) in items" :key="index">
        <LayoutHeaderNavbarItem :text="item.text" :to="item.to" :iconName="item.iconName" :theme="theme"/>
    </li>
  </ul>
</template>