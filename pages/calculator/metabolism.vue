<script setup>
onBeforeMount(() => {
  setPageLayout("secondary");
});

let location=[
  {
    title:'محاسبه گرها',
    to:'/calculator'
  },
  {
    title:'شاخص توده بندی',
    to:'/bmi'
  }
]
</script>

<template>
  <main>
    <div class="py-6 bg-natural-beta mb-12">
      <LayoutLocation :items="location"/>
    </div>
    <div class="container mb-between-section">
      <SectionsCalculatorLinks/>
    </div>
  </main>
</template>