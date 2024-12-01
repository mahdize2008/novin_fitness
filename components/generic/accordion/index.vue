<script setup>
import { ref } from 'vue';
let { items }=defineProps({
  items:{
    type:Array
  }
})
let activeId=ref(1)
function changeAccordion(number){   
    activeId.value===number?activeId.value=0:activeId.value=number
}
</script>

<template>
  <ul>
    <GenericAccordionItem class="lg:mb-4 mb-3 last:mb-0" v-for="(item, index) in items" :isActive="activeId===index+1" :id="index+1" :question="item.question" :answer="item.answer" :key="index" @changeAccordion="(number) => changeAccordion(number)"/>
  </ul>
</template>

<style>

</style>