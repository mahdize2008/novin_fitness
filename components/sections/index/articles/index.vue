<script setup>
</script>

<template>
  <swiper-container
    :slides-per-view="4"
    :breakpoints="{
      320: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1172: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }"
    loop
    class="!overflow-visible"
  >
    <swiper-slide class="max-lg:max-w-[230px]">
      <GenericArticle />
    </swiper-slide>
    <swiper-slide class="max-lg:max-w-[230px]">
      <GenericArticle />
    </swiper-slide>
    <swiper-slide class="max-lg:max-w-[230px]">
      <GenericArticle />
    </swiper-slide>
    <swiper-slide class="max-lg:max-w-[230px]">
      <GenericArticle />
    </swiper-slide>
    <swiper-slide class="max-lg:max-w-[230px]">
      <GenericArticle />
    </swiper-slide>
  </swiper-container>
</template>