<script setup>
let baseData = useState("baseData", () => {});
let { data, error } = await useFetchData(
  "http://cms.nf-developer.ir/api/v1/options"
);
baseData.value = data?.options;
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>