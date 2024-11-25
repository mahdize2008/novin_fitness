<script setup>
let steps = [
  {
    number: 1,
    title: "رصد کردن غذای روزانه ",
    text: "روزانه مواد غذایی مصرفی در هر وعد را وارد کن تا به راحتی از کالری و درشت مغذی و ریز مغذی آن با خبر باشی.",
    img: "/img/img-11.png",
    shape: "/img/img-24.png",
  },
  {
    number: 2,
    title: "فعالیت های روزانه",
    text: "فعالیت های روزانه و ورزشی خود را وارد کن تا بدونی چقدر کالری سوزندی.",
    img: "/img/img-3.png",
    shape: "/img/img-25.png",
  },
  {
    number: 3,
    title: "آنالیز تناسب اندام",
    text: "بدنت رو آنالیز کن تا از درصد چربی، اضافه وزن یا کاهش وزن در امان باشی.",
    img: "/img/img-2.png",
    shape: "/img/img-4.png",
  },
];

let filters = [
  { title: "همه", filter: "all" },
  { title: "سلامتی ", filter: "health" },
  { title: "تغذیه ", filter: "feeding" },
  { title: "آشپزی ", filter: "cooking" },
];
</script>

<template>
  <div>
    <div class="container my-between-section">
      <GenericTitle
        class="justify-center mb-between-section"
        size="lg"
        theme="dark"
      >
        <span class="mark">۳ قدم</span> تا رسیدن به عادت زندگی سالم
      </GenericTitle>
      <ul class="lg:px-24">
        <SectionsIndexStep
          v-for="(step, index) in steps"
          :key="index"
          :img="step.img"
          :shape="step.shape"
          :number="step.number"
          :text="step.text"
          :title="step.title"
        />
      </ul>
    </div>
    <div class="mb-10">
      <GenericHeaderSections class="mb-6 container" center title="محاسبه گر های نوین فیتنس" subtitle="با محاسبه گرهای نوین فیتنس از سلامتی خود باخبر باشید."/>
      <div class="relative">
        <img
          src="/img/img-26.png"
          class="absolute top-0 right-0 w-full h-full"
        />
        <div class="container relative z-10">
          <ul
            class="lg:py-16 py-10 flex flex-wrap items-center justify-center md:-m-2.5 -m-1"
          >
            <li class="sm:w-1/3 max-lg:grow md:p-2.5 p-1">
              <NuxtLink to="/" class="block w-full bg-white rounded-2xl lg:p-5 p-2">
                <div class="lg:h-[110px] h-[70px] flex items-center justify-center lg:mb-3 mb-2">
                  <img class="max-h-full max-w-full" src="/img/img-8.png" />
                </div>
                <h2 class="lg:text-base text-xs-plus font-semibold text-dark text-center">
                  نوع استخوان بندی
                </h2>
              </NuxtLink>
            </li>
            <li class="sm:w-1/3 max-lg:grow md:p-2.5 p-1">
              <NuxtLink to="/" class="block w-full bg-white rounded-2xl lg:p-5 p-2">
                <div class="lg:h-[110px] h-[70px] flex items-center justify-center lg:mb-3 mb-2">
                  <img class="max-h-full max-w-full" src="/img/img-7.png" />
                </div>
                <h2 class="lg:text-base text-xs-plus font-semibold text-dark text-center">
                  نوع استخوان بندی
                </h2>
              </NuxtLink>
            </li>
            <li class="sm:w-1/3 max-lg:grow md:p-2.5 p-1">
              <NuxtLink to="/" class="block w-full bg-white rounded-2xl lg:p-5 p-2">
                <div class="lg:h-[110px] h-[70px] flex items-center justify-center lg:mb-3 mb-2">
                  <img class="max-h-full max-w-full" src="/img/img-10.png" />
                </div>
                <h2 class="lg:text-base text-xs-plus font-semibold text-dark text-center">
                  نوع استخوان بندی
                </h2>
              </NuxtLink>
            </li>
            <li class="sm:w-1/3 max-lg:grow md:p-2.5 p-1">
              <NuxtLink to="/" class="block w-full bg-white rounded-2xl lg:p-5 p-2">
                <div class="lg:h-[110px] h-[70px] flex items-center justify-center lg:mb-3 mb-2">
                  <img class="max-h-full max-w-full" src="/img/img-6.png" />
                </div>
                <h2 class="lg:text-base text-xs-plus font-semibold text-dark text-center">
                  نوع استخوان بندی
                </h2>
              </NuxtLink>
            </li>
            <li class="sm:w-1/3 max-lg:grow md:p-2.5 p-1">
              <NuxtLink to="/" class="block w-full bg-white rounded-2xl lg:p-5 p-2">
                <div class="lg:h-[110px] h-[70px] flex items-center justify-center lg:mb-3 mb-2">
                  <img class="max-h-full max-w-full" src="/img/img-9.png" />
                </div>
                <h2 class="lg:text-base text-xs-plus font-semibold text-dark text-center">
                  نوع استخوان بندی
                </h2>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="relative pt-between-section mb-between-section before:bg-warning-alpha/30 before:h-80 before:absolute before:w-full before:top-0 before:right-0">
      <div class="container mb-between-section relative z-10 flex flex-wrap">
        <GenericTitle shape shapeCircle class="lg:mb-7 mb-4 w-full">
          مقالات نوین فیتنس
        </GenericTitle>
        <!-- <div class="flex items-center mb-12 max-lg:order-last"> -->
          <GenericFilter :filters="filters" />
          <GenericBtn
            iconName="left-arrow"
            class="mr-auto max-sm:ml-auto max-sm:order-last max-sm:mt-5"
            tag="NuxtLink"
            to="/"
          >
            مشاهده همه مقالات
          </GenericBtn>
        <!-- </div> -->
        <SectionsIndexArticles class="w-full lg:mt-12 mt-6"/>
      </div>
    </div>
    <div class="container mb-between-section">
      <div class="bg-secondary-theta relative rounded-2.5xl lg:p-10 py-6 px-3 flex items-center mb-6">
        <img src="/img/img-15.png" class="absolute top-4 right-4 -translate-y-full translate-x-full" alt="">
        <img src="/img/img-27.png" class="absolute top-2 left-2 -translate-y-full -translate-x-full" alt="">
        <img src="/img/img-5.png" class="w-full h-full absolute top-0 right-0" alt="">
        <img src="/img/shape.png" class="max-sm:hidden" alt="">
        <GenericTitle theme="white mx-auto">
          سوالات متداول در مورد خدمات نوین فیتنس
        </GenericTitle>
        <img src="/img/shape.png" class="max-sm:hidden" alt="">
      </div>
      <GenericAccordion/>
    </div>
    <div class="container mb-between-section flex max-md:flex-wrap items-center">
      <div class="flex items-center md:ml-auto max-md:mb-6">
        <img src="/img/vector.png" class="lg:max-w-[42px] max-w-[32px] lg:ml-10 ml-4" alt="">
        <GenericHeaderSections class="" center title="تجربه کاربران نوین فیتنس" subtitle="همیشه برای خوندن نظرات شما اماده ایم..."/>
      </div>
      <SectionsIndexComments class="md:w-[57%] w-full"/>
    </div>
  </div>
</template>