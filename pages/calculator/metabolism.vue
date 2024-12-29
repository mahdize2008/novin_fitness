<script setup>
onBeforeMount(() => {
  setPageLayout("secondary");
});

let location = [
  {
    title: "محاسبه گرها",
    to: "/calculator",
  },
  {
    title: "شاخص توده بندی",
    to: "/bmi",
  },
];
</script>

<template>
  <main>
    <div class="py-6 bg-natural-beta mb-12">
      <LayoutLocation :items="location" />
    </div>
    <div class="container mb-8">
      <SectionsCalculatorLinks />
    </div>
    <div class="container mb-between-section">
      <p class="text-secondary text-md text-center font-semibold mb-8">
        شما به راحتی می توانید از طریق محاسبه آنلاین متابولیسم پایه (BMR) خود را محاسبه کنید:
      </p>
      <div
        class="border-2 border-natural-beta rounded-xl p-10 w-[715px] mx-auto"
      >
        <img
          src="/img/img-9.png"
          class="h-[180px] w-full object-contain object-center mb-8"
          alt=""
        />
        <form class="flex flex-wrap items-center">
          <div class="w-1/2 p-2">
            <GenericInput
              theme="natural"
              placeholder="وزن"
              according="کیلوگرم"
            />
          </div>
          <div class="w-1/2 p-2">
            <GenericInput
              theme="natural"
              placeholder="قد"
              according="سانتی متر"
            />
          </div>
          <div class="w-1/2 p-2">
            <GenericInput theme="natural" placeholder="سن" according="سال"/>
          </div>
          <div class="w-1/2 p-2">
            <GenericInput theme="natural" placeholder="میزان فعالیت ورزشی"/>
          </div>
          <div class="w-full p-2">
            <GenericBtn class="mx-auto" type="submit"> محاسبه کن </GenericBtn>
          </div>
        </form>
      </div>
    </div>
    <div class="container mb-between-section">
      <div class="mb-12 last:mb-0">
        <GenericTitle size="sm" theme="dark" class="mb-4">
          شاخص توده بندی چیست؟
        </GenericTitle>
        <p class="text-base text-dark font-medium text-justify leading-9">
          شاخص توده بدنی (BMI) شاخصی است که برای مقایسه قد و وزن افراد استفاده
          میشود.
          <br />
          در واقع ما با اینکار قصد فهمیدن چاق یا لاغر بودن افراد رو نداریم بلکه
          به دنبال فهمیدن سلامت وزن فرد بر اساس قد و وزنش هستیم.
          <br />
          این شاخص در هر سن متفاوت است.
          <br />
          شما به راحتی در میتوانید شاخص بدنی خود را بفهمید، برای اینکار شما فقط
          باید با فرمول زیر پیش بروید:
          <br />
          برای حساب کردن توده بدنی فقط کافیست که، ابتدا قد خود را ضربدر ۲ کرده و
          عدد به دست آمده را تقسیم بر وزن خود کنید.
          <br />
          بطور مثال قد یک فرد ۸۵/۱ و وزن آن ۸۰ کیلو است، که اگر ضربدر ۲ شود عدد
          ۷۰/۳به دست می آید، حالا شما باید ۷۰/۳ را تقسیم بر ۸۰ کنید که عدد به
          دست آمده ۶/۲۱ شاخص توده بدنی فرد است.
          <br />
          مقادیر BMI به شکل زیر تفسیر می‌شود:
          <br />
          کمتر از 18.5: کمبود وزن
          <br />
          18.5 تا 24.9: وزن نرمال
          <br />
          25 تا 29.9: اضافه وزن
          <br />
          30 تا 34.9: چاقی درجه 1
          <br />
          35 تا 39.9: چاقی درجه 2 (شدید)
          <br />
          بیش از 40: چاقی درجه 3 (خطرناک)
          <br />
          به عنوان یک معیار ساده، BMI می‌تواند به عنوان یک ابزار اولیه برای
          ارزیابی وزن بدن استفاده شود، اما نباید به عنوان تنها معیار در نظر
          گرفته شود. به عنوان مثال، BMI ممکن است وزن عضلانی و چربی را در نظر
          نگیرد و برای برخی افراد با ساختار بدنی خاص، ارزیابی دقیقی از وضعیت وزن
          ارائه ندهد. بنابراین، در نظر گرفتن عوامل دیگر مانند ترکیب بدنی، فعالیت
          فیزیکی، و سلامت عمومی نیز مهم است.
        </p>
      </div>
      <div class="mb-12 last:mb-0">
        <GenericTitle size="sm" theme="dark" class="mb-4">
          چرا باید شاخص توده بدنی را حساب کنیم؟
        </GenericTitle>
        <p
          class="text-base text-dark font-medium text-justify leading-9 mb-3.5"
        >
          محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای انجام
          این محاسبه وجود دارد:
        </p>
        <ul>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              1. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              2. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              3. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              4. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
        </ul>
      </div>
      <div class="mb-12 last:mb-0">
        <GenericTitle size="sm" theme="dark" class="mb-4">
          چرا باید شاخص توده بدنی را حساب کنیم؟
        </GenericTitle>
        <p
          class="text-base text-dark font-medium text-justify leading-9 mb-3.5"
        >
          محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای انجام
          این محاسبه وجود دارد:
        </p>
        <ul>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              1. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              2. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              3. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
          <li class="mb-3 last:mb-0">
            <h3
              size="sm"
              theme="dark"
              class="mb-3 text-md text-dark font-semibold list-decimal"
            >
              4. ارزیابی وضعیت وزن بدن
            </h3>
            <p class="text-base text-dark font-medium text-justify leading-9">
              محاسبه شاخص توده بدنی (BMI) اهمیت زیادی دارد و دلایل مختلفی برای
              انجام این محاسبه وجود دارد:
            </p>
          </li>
        </ul>
      </div>
      <div class="mb-12 last:mb-0">
        <GenericTitle size="sm" theme="dark" class="mb-4">
          منظور از وزن مناسب در BMI چیست؟
        </GenericTitle>
        <p class="text-base text-dark font-medium text-justify leading-9">
          وزن مناسب در شاخص توده بدنی (BMI) به میانه‌ای اشاره دارد که به عنوان
          وزن نرمال یا سالم در نظر گرفته می‌شود. به طور کلی، محدوده BMI بین 18.5
          تا 24.9 به عنوان وزن نرمال محسوب می‌شود. اگر شاخص توده بدنی (BMI) کمتر
          از 18.5 باشد، این نشانگر کمبود وزن است. اگر بین 18.5 تا 24.9 باشد، به
          عنوان وزن نرمال در نظر گرفته می‌شود. اگر بین 25 تا 29.9 باشد، به عنوان
          اضافه وزن شناخته می‌شود. و اگر 30 یا بیشتر باشد، این نشانگر چاقی است.
          <br />
          در نهایت، هدف از داشتن وزن مناسب در بی ام ای، حفظ سلامتی و کاهش ریسک
          بروز بیماری‌های مزمن مانند دیابت، بیماری‌های قلبی و عروقی، بیماری‌های
          مفصلی و سایر مشکلات سلامتی مرتبط با چاقی یا لاغری است. بنابراین، بهتر
          است در محدوده BMI مناسب قرار گیرید و سعی کنید سبک زندگی سالمی را ادامه
          دهید تا این وضعیت را حفظ کنید.
        </p>
      </div>
    </div>
  </main>
</template>