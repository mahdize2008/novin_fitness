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
    <div class="container mb-8">
      <SectionsCalculatorLinks/>
    </div>
    <div class="container mb-between-section">
      <p class="text-secondary text-md text-center font-semibold mb-8">
        شما به راحتی می توانید از طریق محاسبه آنلاین BMI میزان اضافه وزن یا کمبود وزن خود را محاسبه کنید:
      </p>
      <div class="border-2 border-natural-beta rounded-xl p-10 w-[715px] mx-auto">
        <img src="/img/img-10.png" class="h-[180px] w-full object-contain object-center mb-8" alt="">
        <form class="flex flex-wrap items-center">
          <div class="w-1/2 p-2">
            <GenericInput theme="natural" placeholder="وزن" according="کیلوگرم"/>
          </div>
          <div class="w-1/2 p-2">
            <GenericInput theme="natural" placeholder="قد" according="سانتی متر"/>
          </div>
          <div class="w-1/2 p-2">
            <GenericInput theme="natural" placeholder="سن"/>
          </div>
          <div class="w-full p-2">
            <GenericBtn class="mx-auto" type="submit">
              محاسبه کن
            </GenericBtn>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>