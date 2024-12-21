<script setup>
let baseData = useState("baseData");
let aboutUs = baseData.value?.about_us;
</script>

<template>
  <div class="container pt-12">
    <img
      src="/img/logo.png"
      class="lg:max-h-[60px] max-h-[40px] lg:mb-8 max-lg:mx-auto"
      alt=""
    />
    <div class="flex items-start max-lg:hidden">
      <p class="text-white text-md font-medium w-[55%] ml-24">
        {{ aboutUs }}
      </p>
      <div class="grow">
        <h2 class="text-white text-lg font-medium mb-4">
          عضویت در خبرنامه نوین فیتنس
        </h2>
        <form
          action=""
          class="bg-white flex items-center rounded-2xl overflow-hidden pl-3 w-full"
        >
          <GenericInput />
          <button
            type="submit"
            class="bg-primary-dark rounded-xl text-white px-4 h-10 shrink-0"
          >
            تایید و ارسال
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
</style>