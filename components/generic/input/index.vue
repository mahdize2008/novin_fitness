<script setup>
let { size, theme, tag, rounded, outline, hasBtn, iconName, iconPathCount } =
  defineProps({
    size: {
      type: String,
      default: "base",
    },
    theme: {
      type: String,
      default: "white",
    },
    placeholder: {
      type: String,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    according: {
      type: String,
    },
  });
</script>

<template>
  <div class="input-wrapper" :class="[`input-${size}`, `${theme}-theme`]">
    <input type="text" class="input" :placeholder="placeholder"/>
    <div v-if="according?.length" class="absolute top-1/2 -translate-y-1/2 left-4 text-dark-beta text-sm z-10">
      {{ according }}
    </div>
  </div>
</template>

<style>
.input-wrapper {
  @apply bg-white w-full lg:h-14 h-10 rounded-xl overflow-hidden relative;
}
.input {
  @apply text-dark w-full h-full px-3 placeholder:text-dark bg-transparent;
}

/* size */
.input-wrapper.input-large {
  @apply lg:h-16 h-11;
}
.input-wrapper.input-sm {
  @apply lg:h-12 h-8;
}

/* theme */
.input-wrapper.natural-theme {
  @apply bg-dark/5;
}
</style>
