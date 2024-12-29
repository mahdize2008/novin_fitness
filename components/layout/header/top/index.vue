<script setup>
let navItems = [
  {
    to: "/",
    text: "خانه",
  },
  {
    to: "/calculator",
    text: "محاسبه گرها",
  },
  {
    to: "/",
    text: "خانه",
  },
  {
    to: "/",
    text: "خانه",
  },
  {
    to: "/",
    text: "خانه",
  },
  {
    to: "/",
    text: "خانه",
  },
];
</script>

<template>
  <div class="container flex items-center lg:py-14 py-8">
    <GenericIcon
      name="list"
      class="text-white text-base font-bold cursor-pointer md:!hidden"
      @click="$emit('changeMenuButton')"
    />
    <NuxtLink class="block md:ml-20 max-md:mr-auto" to="/">
      <img src="/img/logo.png" class="lg:max-w-[125px] max-w-[105px]" />
    </NuxtLink>
    <LayoutHeaderNavbar :items="navItems" class="max-md:hidden" />
    <NuxtLink
      to="/"
      class="bg-dark border-white text-white lg:border-[6px] border-4 flex items-center justify-center rounded-full lg:w-11 w-8 lg:h-11 h-8 mr-auto"
    >
      <GenericIcon name="user" class="max-lg:text-xs"/>
    </NuxtLink>
  </div>
</template>