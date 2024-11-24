<script setup>
let {number,title,text,img,shape}=defineProps({
    number:{
        type:Number,
        default:1
    },
    title:{
        type:String
    },
    text:{
        type:String
    },
    img:{
        type:String
    },
    shape:{
        type:String
    }
})
</script>

<template>
  <li class="flex items-center flex-row even:flex-row-reverse even:z-20 relative group -mt-20 first:!mt-0">
        <div class="grow group-odd:ml-14 group-even:mr-14">
          <div class="text-20xl text-primary/10 leading-none font-bold">
            {{ number }}
          </div>
          <GenericTitle class="mb-2">
            {{ title }}
          </GenericTitle>
          <p class="text-md font-medium text-dark">
            {{ text }}
          </p>
        </div>
        <div class="w-1/2 group-odd:w-[55%] shrink-0 relative">
          <img :src="img" class="w-full relative z-10" alt="">
          <img :src="shape" class="absolute -top-3.5 group-odd:-left-3.5 group-even:-right-3.5" alt="">
        </div>
      </li>
</template>