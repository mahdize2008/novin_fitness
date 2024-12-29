<template>
  <ul class="p-7 bg-natural-beta rounded-3xl flex items-center justify-between">
    <li>
      <NuxtLink to="/calculator/bmi" class="flex items-center text-base group">
        <img src="/img/bmi.png" class="ml-2.5 max-h-[33px]" alt="" />
        <h2
          class="text-base text-dark relative after:w-0 group-[&.router-link-active]:after:!w-full after:h-0.5 after:rounded-full after:bg-primary after:absolute after:-bottom-2 after:right-0"
        >
          شاخص توده بدنی
        </h2>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/calculator/fat" class="flex items-center text-base group">
        <img src="/img/fat.png" class="ml-2.5 max-h-[33px]" alt="" />
        <h2
          class="text-base text-dark relative after:w-0 group-[&.router-link-active]:after:!w-full after:h-0.5 after:rounded-full after:bg-primary after:absolute after:-bottom-2 after:right-0"
        >
          درصد چربی
        </h2>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/calculator/skeletal" class="flex items-center text-base group">
        <img src="/img/skeletal.png" class="ml-2.5 max-h-[33px]" alt="" />
        <h2
          class="text-base text-dark relative after:w-0 group-[&.router-link-active]:after:!w-full after:h-0.5 after:rounded-full after:bg-primary after:absolute after:-bottom-2 after:right-0"
        >
          نوع استخوان بندی
        </h2>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/calculator/metabolism" class="flex items-center text-base group">
        <img src="/img/metabolism.png" class="ml-2.5 max-h-[33px]" alt="" />
        <h2
          class="text-base text-dark relative after:w-0 group-[&.router-link-active]:after:!w-full after:h-0.5 after:rounded-full after:bg-primary after:absolute after:-bottom-2 after:right-0"
        >
          متابولیسم
        </h2>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/calculator/ratio" class="flex items-center text-base group">
        <img src="/img/ratio.png" class="ml-2.5 max-h-[33px]" alt="" />
        <h2
          class="text-base text-dark relative after:w-0 group-[&.router-link-active]:after:!w-full after:h-0.5 after:rounded-full after:bg-primary after:absolute after:-bottom-2 after:right-0"
        >
          نسبت کمر به باسن
        </h2>
      </NuxtLink>
    </li>
  </ul>
</template>