<script setup>
let { isActive } = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="fixed z-50 bg-primary-gradient w-[300px] h-full top-0 transition-all duration-300 -right-full flex flex-col justify-between"
    :class="{ 'right-0': isActive }"
  >
    <div>
      <div class="flex items-center p-4 mb-4">
        <img src="/img/logo.png" class="max-w-[105px]" alt="" />
        <GenericIcon
          name="close"
          class="text-white text-md mr-auto cursor-pointer"
          @click="$emit('closeMenu')"
        />
      </div>
      <ul class="-my-3">
        <li
          class="relative after:w-full after:h-[1px] after:bg-white-gradient after:absolute after:right-0 after:bottom-0 after:translate-y-full mb-[1px] last:mb-0 last:after:hidden px-4"
        >
          <NuxtLink
            to="/"
            class="text-white flex items-center leading-none text-sm py-3"
          >
            <GenericIcon name="home" class="ml-3 text-base" />
            خانه
          </NuxtLink>
        </li>
        <li
          class="relative after:w-full after:h-[1px] after:bg-white-gradient after:absolute after:right-0 after:bottom-0 after:translate-y-full mb-[1px] last:mb-0 last:after:hidden px-4"
        >
          <NuxtLink
            to="/"
            class="text-white flex items-center leading-none text-sm py-3"
          >
            <GenericIcon name="home" class="ml-3 text-base" />
            خانه
          </NuxtLink>
        </li>
        <li
          class="relative after:w-full after:h-[1px] after:bg-white-gradient after:absolute after:right-0 after:bottom-0 after:translate-y-full mb-[1px] last:mb-0 last:after:hidden px-4"
        >
          <NuxtLink
            to="/"
            class="text-white flex items-center leading-none text-sm py-3"
          >
            <GenericIcon name="home" class="ml-3 text-base" />
            خانه
          </NuxtLink>
        </li>
        <li
          class="relative after:w-full after:h-[1px] after:bg-white-gradient after:absolute after:right-0 after:bottom-0 after:translate-y-full mb-[1px] last:mb-0 last:after:hidden px-4"
        >
          <NuxtLink
            to="/"
            class="text-white flex items-center leading-none text-sm py-3"
          >
            <GenericIcon name="home" class="ml-3 text-base" />
            خانه
          </NuxtLink>
        </li>
        <li
          class="relative after:w-full after:h-[1px] after:bg-white-gradient after:absolute after:right-0 after:bottom-0 after:translate-y-full mb-[1px] last:mb-0 last:after:hidden px-4"
        >
          <NuxtLink
            to="/"
            class="text-white flex items-center leading-none text-sm py-3"
          >
            <GenericIcon name="home" class="ml-3 text-base" />
            خانه
          </NuxtLink>
        </li>
        <li
          class="relative after:w-full after:h-[1px] after:bg-white-gradient after:absolute after:right-0 after:bottom-0 after:translate-y-full mb-[1px] last:mb-0 last:after:hidden px-4"
        >
          <NuxtLink
            to="/"
            class="text-white flex items-center leading-none text-sm py-3"
          >
            <GenericIcon name="home" class="ml-3 text-base" />
            خانه
          </NuxtLink>
        </li>
      </ul>
    </div>
    <ul class="flex items-center mt-6 p-4 pt-0">
      <li class="ml-2.5 last:ml-0">
        <GenericBtn
          tag="a"
          class="lg:!text-md"
          theme="white"
          rounded
          square
          outline
          href="#"
          iconName="youtube"
        />
      </li>
      <li class="ml-2.5 last:ml-0">
        <GenericBtn
          tag="a"
          class="lg:!text-md"
          theme="white"
          rounded
          square
          outline
          href="#"
          iconName="whatsapp"
        />
      </li>
      <li class="ml-2.5 last:ml-0">
        <GenericBtn
          tag="a"
          class="lg:!text-md"
          theme="white"
          rounded
          square
          outline
          href="#"
          iconName="instagram"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.right-0 {
  right: 0;
}
</style>