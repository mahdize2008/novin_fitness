<script setup>

</script>

<template>
    <div class="relative !overflow-visible">
        <img src="/img/img-23.png" class="absolute lg:max-w-[65px] max-w-[50px] top-0 left-2 -translate-y-1/2 -translate-x-1/2" alt="">
        <img src="/img/img-14.png" class="absolute lg:max-w-[65px] max-w-[50px] bottom-0 right-1.5 translate-y-1/2 translate-x-1/2" alt="">
        <img src="/img/img-28.png" class="absolute max-w-[70%] bottom-0 right-5 translate-y-full" alt="">
        <swiper-container class="mx-0 rounded-2.5xl !overflow-hidden bg-white" :slides-per-view="1">
          <swiper-slide>
              <GenericComment/>
          </swiper-slide>
          <swiper-slide>
              <GenericComment/>
          </swiper-slide>
          <swiper-slide>
              <GenericComment/>
          </swiper-slide>
        </swiper-container>
    </div>
</template>

<style>

</style>