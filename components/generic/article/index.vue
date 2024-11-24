<script setup>
let { to, img, title, text, data, view, author } = defineProps({
  to: {
    type: String,
    default: "/",
  },
  img: {
    type: String,
  },
  title: {
    type: String,
  },
  text: {
    type: String,
  },
  data: {
    type: String,
  },
  view: {
    type: Number,
    default: 0,
  },
  author: {
    type: String,
  },
});
</script>

<template>
  <NuxtLink class="block bg-white rounded-2.5xl overflow-hidden shadow-lighter-shadow" :to="to">
    <img src="/img/img-12.png" class="w-full h-[173px]" alt="">
    <div class="p-4">
        <h2 class="text-sm font-semibold h-[42px] line-clamp-2 mb-2.5">
            رژیم ماکرو شماری - چیزهایی که قبل از شروع رژیم ماکرو باید بدانیم.
        </h2>
        <p class="text-xs text-dark/70 font-medium h-[54px] mb-5 line-clamp-3">
            مردم به دلایل زیادی گیاه‌خوار ‌می‌شوند، از جمله سلامتی، اعتقادات مذهبی، نگرانی در مورد رفاه حیوانات یا استفاده از آنتی بیوتیک‌ها و ...
        </p>
        <ul class="flex items-center justify-between">
            <li class="flex items-center text-2xs text-dark leading-none ml-1 last:ml-0">
                <GenericIcon name="calendar" class="text-xs-plus ml-1"/>
                ۷ بهمن ۱۴۰۱
            </li>
            <li class="flex items-center text-2xs text-dark leading-none ml-1 last:ml-0">
                <GenericIcon name="show" class="text-xs-plus ml-1"/>
                ۵۰ بازدید
            </li>
            <li class="flex items-center text-2xs text-dark leading-none ml-1 last:ml-0">
                <GenericIcon name="edit1" class="text-xs-plus ml-1"/>
                علیرضا رحمانی
            </li>
        </ul>
    </div>
  </NuxtLink>
</template>

<style>
</style>