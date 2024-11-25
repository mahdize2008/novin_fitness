<script setup>
import { ref } from 'vue';
const items=[
    { title:'لورم ایپسوم', text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { title:'لورم ایپسوم', text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { title:'لورم ایپسوم', text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { title:'لورم ایپسوم', text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
    { title:'لورم ایپسوم', text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است' },
]
let activeId=ref(1)
function changeAccordion(number){   
    activeId.value===number?activeId.value=0:activeId.value=number
}
</script>

<template>
  <ul>
    <GenericAccordionItem class="lg:mb-4 mb-3 last:mb-0" v-for="(item, index) in items" :isActive="activeId===index+1" :id="index+1" :title="item.title" :text="item.text" :key="index" @changeAccordion="(number) => changeAccordion(number)"/>
  </ul>
</template>

<style>

</style>