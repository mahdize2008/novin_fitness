<script setup>
onBeforeMount(() => {
  setPageLayout("secondary");
});

let location=[
  {
    title:'محاسبه گرها',
    to:'/calculator'
  }
]
</script>

<template>
  <main>
    <div class="py-6 bg-natural-beta mb-12">
      <LayoutLocation :items="location"/>
    </div>
    <div class="container mb-between-section">
      <GenericTitle
        class="lg:mb-3 mb-1.5"
        shape
        shapeCircle
        size="sm"
        theme="dark"
      >
        ابزار محاسبه سلامتی
      </GenericTitle>
      <p class="text-dark lg:text-base text-sm font-medium">
        آیا با شاخص توده بدنی (BMI) و درصد چربی خود آشنایی دارید؟ چگونه شکل بدن
        مناسب خود را ارزیابی می‌کنید؟ آیا از سلامت استخوان‌هایتان اطمینان دارید؟
        همچنین، آیا نیازهای سوخت و ساز بدنتان را میشناسید؟
      </p>
    </div>
    <div class="container mb-between-section">
      <div
        class="lg:-m-4 -m-2 flex even:flex-row-reverse max-lg:flex-wrap items-center lg:mb-12 mb-8 last:mb-0"
      >
        <div class="w-[490px] lg:p-4 p-2 shrink-0 max-lg:w-full">
          <img
            src="/img/img-10.png"
            class="w-full object-contain object-center mx-auto lg:max-h-[300px] max-h-[200px]"
          />
        </div>
        <div class="p-4">
          <GenericTitle
            class="lg:mb-3 mb-1.5"
            shape
            shapeCircle
            size="sm"
            theme="dark"
          >
            شاخص توده بدنی
          </GenericTitle>
          <p class="text-dark lg:text-base text-sm font-medium lg:mb-7 mb-3">
            شاخص توده بدنی یا همان BMI که مخفف (Body Mass Index) است، سنجشی
            آماری برای مقایسه وزن و قد و بدست آوردن سلامت وزن هر شخص با توجه به
            قدش است. این شاخص برای اولین بار توسط دکتر لمباخ در سال ۱۸۳۲ معرفی
            شد و به عنوان یک ابزار ساده برای اندازه‌گیری توده بدنی در جمعیت‌ها و
            ارزیابی ریسک‌های بهداشتی مرتبط با وزن استفاده می‌شود، نوین فیتنس این
            امکان را فراهم کرده تا با وارد کردن وزن، قد و سن خود به راحتی BMI
            خود را متوجه بشوید.
          </p>
          <GenericBtn iconName="left-arrow" size="lg" class="w-fit" to="/calculator/bmi" tag="nuxtLink">
            مشاهده محاسبه گر
          </GenericBtn>
        </div>
      </div>
      <div
        class="lg:-m-4 -m-2 flex even:flex-row-reverse max-lg:flex-wrap items-center lg:mb-12 mb-8 last:mb-0"
      >
        <div class="w-[490px] lg:p-4 p-2 shrink-0 max-lg:w-full">
          <img
            src="/img/img-7.png"
            class="w-full object-contain object-center mx-auto lg:max-h-[300px] max-h-[200px]"
          />
        </div>
        <div class="p-4">
          <GenericTitle
            class="lg:mb-3 mb-1.5"
            shape
            shapeCircle
            size="sm"
            theme="dark"
          >
            شاخص توده بدنی
          </GenericTitle>
          <p class="text-dark lg:text-base text-sm font-medium lg:mb-7 mb-3">
            شاخص توده بدنی یا همان BMI که مخفف (Body Mass Index) است، سنجشی
            آماری برای مقایسه وزن و قد و بدست آوردن سلامت وزن هر شخص با توجه به
            قدش است. این شاخص برای اولین بار توسط دکتر لمباخ در سال ۱۸۳۲ معرفی
            شد و به عنوان یک ابزار ساده برای اندازه‌گیری توده بدنی در جمعیت‌ها و
            ارزیابی ریسک‌های بهداشتی مرتبط با وزن استفاده می‌شود، نوین فیتنس این
            امکان را فراهم کرده تا با وارد کردن وزن، قد و سن خود به راحتی BMI
            خود را متوجه بشوید.
          </p>
          <GenericBtn iconName="left-arrow" size="lg" class="w-fit">
            مشاهده محاسبه گر
          </GenericBtn>
        </div>
      </div>
      <div
        class="lg:-m-4 -m-2 flex even:flex-row-reverse max-lg:flex-wrap items-center lg:mb-12 mb-8 last:mb-0"
      >
        <div class="w-[490px] lg:p-4 p-2 shrink-0 max-lg:w-full">
          <img
            src="/img/img-8.png"
            class="w-full object-contain object-center mx-auto lg:max-h-[300px] max-h-[200px]"
          />
        </div>
        <div class="p-4">
          <GenericTitle
            class="lg:mb-3 mb-1.5"
            shape
            shapeCircle
            size="sm"
            theme="dark"
          >
            شاخص توده بدنی
          </GenericTitle>
          <p class="text-dark lg:text-base text-sm font-medium lg:mb-7 mb-3">
            شاخص توده بدنی یا همان BMI که مخفف (Body Mass Index) است، سنجشی
            آماری برای مقایسه وزن و قد و بدست آوردن سلامت وزن هر شخص با توجه به
            قدش است. این شاخص برای اولین بار توسط دکتر لمباخ در سال ۱۸۳۲ معرفی
            شد و به عنوان یک ابزار ساده برای اندازه‌گیری توده بدنی در جمعیت‌ها و
            ارزیابی ریسک‌های بهداشتی مرتبط با وزن استفاده می‌شود، نوین فیتنس این
            امکان را فراهم کرده تا با وارد کردن وزن، قد و سن خود به راحتی BMI
            خود را متوجه بشوید.
          </p>
          <GenericBtn iconName="left-arrow" size="lg" class="w-fit">
            مشاهده محاسبه گر
          </GenericBtn>
        </div>
      </div>
      <div
        class="lg:-m-4 -m-2 flex even:flex-row-reverse max-lg:flex-wrap items-center lg:mb-12 mb-8 last:mb-0"
      >
        <div class="w-[490px] lg:p-4 p-2 shrink-0 max-lg:w-full">
          <img
            src="/img/img-9.png"
            class="w-full object-contain object-center mx-auto lg:max-h-[300px] max-h-[200px]"
          />
        </div>
        <div class="p-4">
          <GenericTitle
            class="lg:mb-3 mb-1.5"
            shape
            shapeCircle
            size="sm"
            theme="dark"
          >
            شاخص توده بدنی
          </GenericTitle>
          <p class="text-dark lg:text-base text-sm font-medium lg:mb-7 mb-3">
            شاخص توده بدنی یا همان BMI که مخفف (Body Mass Index) است، سنجشی
            آماری برای مقایسه وزن و قد و بدست آوردن سلامت وزن هر شخص با توجه به
            قدش است. این شاخص برای اولین بار توسط دکتر لمباخ در سال ۱۸۳۲ معرفی
            شد و به عنوان یک ابزار ساده برای اندازه‌گیری توده بدنی در جمعیت‌ها و
            ارزیابی ریسک‌های بهداشتی مرتبط با وزن استفاده می‌شود، نوین فیتنس این
            امکان را فراهم کرده تا با وارد کردن وزن، قد و سن خود به راحتی BMI
            خود را متوجه بشوید.
          </p>
          <GenericBtn iconName="left-arrow" size="lg" class="w-fit">
            مشاهده محاسبه گر
          </GenericBtn>
        </div>
      </div>
      <div
        class="lg:-m-4 -m-2 flex even:flex-row-reverse max-lg:flex-wrap items-center lg:mb-12 mb-8 last:mb-0"
      >
        <div class="w-[490px] lg:p-4 p-2 shrink-0 max-lg:w-full">
          <img
            src="/img/img-6.png"
            class="w-full object-contain object-center mx-auto lg:max-h-[300px] max-h-[200px]"
          />
        </div>
        <div class="p-4">
          <GenericTitle
            class="lg:mb-3 mb-1.5"
            shape
            shapeCircle
            size="sm"
            theme="dark"
          >
            شاخص توده بدنی
          </GenericTitle>
          <p class="text-dark lg:text-base text-sm font-medium lg:mb-7 mb-3">
            شاخص توده بدنی یا همان BMI که مخفف (Body Mass Index) است، سنجشی
            آماری برای مقایسه وزن و قد و بدست آوردن سلامت وزن هر شخص با توجه به
            قدش است. این شاخص برای اولین بار توسط دکتر لمباخ در سال ۱۸۳۲ معرفی
            شد و به عنوان یک ابزار ساده برای اندازه‌گیری توده بدنی در جمعیت‌ها و
            ارزیابی ریسک‌های بهداشتی مرتبط با وزن استفاده می‌شود، نوین فیتنس این
            امکان را فراهم کرده تا با وارد کردن وزن، قد و سن خود به راحتی BMI
            خود را متوجه بشوید.
          </p>
          <GenericBtn iconName="left-arrow" size="lg" class="w-fit">
            مشاهده محاسبه گر
          </GenericBtn>
        </div>
      </div>
    </div>
  </main>
</template>