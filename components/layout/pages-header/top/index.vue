<script setup>
let navItems = [
  {
    to: "/",
    text: "خانه",
    iconName:'home'
  },
  {
    to: "/calculator",
    text: "محاسبه گرها",
    iconName:'valid'
  },
  {
    to: "/",
    text: "خانه",
    iconName:'home'
  },
  {
    to: "/",
    text: "خانه",
    iconName:'home'
  },
  {
    to: "/",
    text: "خانه",
    iconName:'home'
  },
  {
    to: "/",
    text: "خانه",
    iconName:'home'
  },
];
let baseData = useState("baseData");
let logo = baseData.value?.logo;
</script>

<template>
  <div class="container flex items-center lg:py-7">
    <GenericIcon
      name="list"
      class="text-dark text-base font-bold cursor-pointer lg:!hidden"
      @click="$emit('changeMenuButton')"
    />
    <NuxtLink class="block md:ml-20 max-lg:mr-auto" to="/">
      <img :src="logo" class="lg:max-w-[125px] max-w-[105px]" />
    </NuxtLink>
    <LayoutHeaderNavbar :items="navItems" class="max-lg:hidden" theme="dark"/>
    <GenericBtn to="/" iconName="logout" theme="primary" class="mr-auto">
      ثبت نام / ورود
    </GenericBtn>
  </div>
</template>