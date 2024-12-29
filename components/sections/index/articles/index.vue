<script setup>
let filters = [
  { title: "همه", filter: "all" },
  { title: "سلامتی ", filter: "health" },
  { title: "تغذیه ", filter: "feeding" },
  { title: "آشپزی ", filter: "cooking" },
];
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

let { data:articles, error } = await useFetchData(
  "https://cms.nf-developer.ir/api/v1/posts/labels/latest?count=10"
);
</script>

<template>
  <div
    class="relative before:bg-warning-alpha/30 before:h-80 before:absolute before:w-full before:top-0 before:right-0"
  >
    <div class="container mb-between-section relative z-10 flex flex-wrap">
      <GenericTitle shape shapeCircle class="lg:mb-7 mb-4 w-full">
        مقالات نوین فیتنس
      </GenericTitle>
      <GenericFilter :filters="filters" />
      <GenericBtn
        iconName="left-arrow"
        class="mr-auto max-sm:ml-auto max-sm:order-last max-sm:mt-5"
        tag="NuxtLink"
        to="/"
      >
        مشاهده همه مقالات
      </GenericBtn>
      <Swiper
        :slides-per-view="4"
        v-if="articles?.posts && articles?.posts?.length"
        :breakpoints="{
          320: {
            slidesPerView: 'auto',
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1172: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        loop
        class="!overflow-visible w-full lg:mt-12 mt-6"
      >
        <SwiperSlide
          class="max-lg:max-w-[230px]"
          v-for="(article, index) in articles.posts"
          :key="index"
        >
          <GenericArticle
            :picture="article.picture"
            :title="article.title"
            :created_at="article.created_at"
            :description="article.description"
            :view="article.number_visit"
            :to="article.id"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>