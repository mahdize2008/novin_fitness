<script setup>
let baseData = useState("baseData");
let links = baseData.value?.social_links;
</script>

<template>
  <div class="container py-6 flex items-center max-md:justify-center">
    <p class="text-white lg:text-sm text-3xs font-medium">
        تمام حقوق مادی و معنوی این وبسایت متعلق به نوین فیتنس میباشد. 2022 ©
    </p>
    <ul class="flex items-center mr-auto max-md:hidden">
      <li class="ml-2.5 last:ml-0">
        <GenericBtn tag="a" class="lg:!text-md" theme="white" rounded square outline :href="links.youtube" iconName="youtube"/>
      </li>
      <li class="ml-2.5 last:ml-0">
        <GenericBtn tag="a" class="lg:!text-md" theme="white" rounded square outline :href="links.telegram" iconName="telegram"/>
      </li>
      <li class="ml-2.5 last:ml-0">
        <GenericBtn tag="a" class="lg:!text-md" theme="white" rounded square outline :href="links.instagram" iconName="instagram"/>
      </li>
    </ul>
  </div>
</template>