<script setup>
let { number, title, text, img, shape } = defineProps({
  number: {
    type: Number,
    default: 1,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  img: {
    type: String,
  },
  shape: {
    type: String,
  },
});
</script>

<template>
  <li
    class="flex max-sm:flex-wrap items-center flex-row even:flex-row-reverse even:z-20 relative group lg:!-mt-28 sm:!-mt-10 first:!mt-0 lg:-m-7 -m-2 max-sm:mb-10 last:mb-0"
  >
    <div class="grow lg:p-7 p-2 max-sm:text-center">
      <div class="lg:text-20xl text-10xl text-primary/10 leading-none font-bold">
        {{ number }}
      </div>
      <GenericTitle class="mb-2 max-sm:justify-center">
        {{ title }}
      </GenericTitle>
      <p class="lg:text-md text-xs font-medium text-dark">
        {{ text }}
      </p>
    </div>
    <div class="w-1/2 group-odd:w-[60%] max-sm:!w-full lg:p-7 p-2 shrink-0">
      <div class="w-full relative">
        <img :src="img" class="w-full relative z-10 max-sm:max-w-[250px] max-sm:mx-auto" alt="" />
        <img
          :src="shape"
          class="absolute -top-3.5 group-odd:-left-3.5 group-even:-right-3.5 max-lg:hidden"
          alt=""
        />
      </div>
    </div>
  </li>
</template>