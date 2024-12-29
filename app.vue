<script setup>
let baseData = useState("baseData", () => {});
let { data, error } = await useFetchData(
  "http://cms.nf-developer.ir/api/v1/options"
);
baseData.value = data?.options;
const nuxtApp = useNuxtApp();
let loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>

<template>
  <GenericLoading v-if="loading"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>