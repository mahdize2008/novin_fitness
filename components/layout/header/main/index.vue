<script setup>
</script>

<template>
  <div class="container flex max-lg:flex-col items-center lg:pb-14 pb-8">
    <img src="/img/img-1.png" class="lg:ml-20 lg:max-w-[340px] max-w-[210px] max-lg:mb-4" />
    <div class="max-lg:order-first">
        <h2 class="text-white font-semibold lg:text-8xl text-base lg:mb-4 mb-2 max-lg:text-center">
            یک قدم تا رسیدن به 
            <br/>
            تناسب اندام با نوین فیتنس
        </h2>
        <p class="text-white lg:text-lg text-xs mb-4">
            با ردیابی کالری غذایی و فعالیت ورزشی روزانه ، عادت سالم در زندگی خود بسازید.
        </p>
        <div class="p-4 shadow-primary-shadow flex items-center rounded-2xl bg-primary-gradient-beta mb-5 max-lg:hidden">
            <div class="p-2 bg-white rounded-lg ml-3">
                <img src="/img/qrcode.png" alt="">
            </div>
            <div>
                <h2 class="text-white text-base-plus font-semibold mb-2">
                    برنامه را دریافت کنید
                </h2>
                <p class="text-white text-sm-plus">
                    برای دانلود برنامه رایگان ، کد را با دوربین تلفن هوشمند خود اسکن کنید.
                </p>
            </div>
        </div>
        <div class="text-white text-xs max-lg:hidden">
            در <NuxtLink to="/" class="underline">iOS</NuxtLink> ، <NuxtLink to="/" class="underline">Android</NuxtLink> و دستگاه‌های دیگر موجود است.
        </div>
    </div>
    <ul class="flex flex-wrap items-center lg:hidden -m-1">
        <li class="p-1 last:ml-0 grow">
            <a href="#" class="bg-primary-gradient-beta rounded-xl shadow-primary-shadow flex items-center px-5 py-2.5">
                <div class="text-3xs text-white ml-4">
                    نسخه اندروید
                    <div class="font-semibold text-xs">
                        دانلود مستقیم
                    </div>
                </div>
                <img src="/img/icon-2.png" class="mr-auto" alt="">
            </a>
        </li>
        <li class="p-1 last:ml-0 grow">
            <a href="#" class="bg-primary-gradient-beta rounded-xl shadow-primary-shadow flex items-center px-5 py-2.5">
                <div class="text-3xs text-white ml-4">
                    نسخه ios 
                    <div class="font-semibold text-xs">
                        دانلود مستقیم
                    </div>
                </div>
                <img src="/img/icon-1.png" class="mr-auto" alt="">
            </a>
        </li>
    </ul>
  </div>
</template>

<style>
</style>