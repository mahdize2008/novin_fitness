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
</script>

<template>
  <div>
    <GenericTitle
      class="justify-center mb-between-section"
      size="lg"
      theme="dark"
    >
      <span class="mark">۳ قدم</span> تا رسیدن به عادت زندگی سالم
    </GenericTitle>
    <ul class="lg:px-24">
      <SectionsIndexStepsItem
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
</template>