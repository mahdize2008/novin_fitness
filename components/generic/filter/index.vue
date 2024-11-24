<script setup>
import { ref } from 'vue';
let{filters}=defineProps({
    filters:{
        type:Array
    }
})

let active = ref(filters[0].filter);

function changeFilter(actived) {
  active.value=actived;
}
</script>

<template>
  <ul class="bg-white flex items-center w-fit rounded-xl">
    <GenericFilterItem
    v-for="(item, index) in filters"
    :key="index"
    :filter="item.filter"
    :class="{'active':item.filter===active}"
    @changeFilter="(actived)=>changeFilter(actived)"
    >
      {{ item.title }}
    </GenericFilterItem>
  </ul>
</template>

<style>
</style>