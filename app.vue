<script setup>
let baseData = useState("baseData", () => {});
const { data, pending, error, refresh } = await useFetch(
  "http://cms.nf-developer.ir/api/v1/options"
);
baseData.value=data.value.options
// console.log(baseData.value);
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>