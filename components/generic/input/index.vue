<script setup>
let { size, theme,tag, rounded, iconName, iconPathCount } = defineProps({
  size: {
    type: String,
    default: "base",
  },
  theme: {
    type: String,
    default: "white",
  },
  tag: {
    type: String,
    default: "div",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  outline: {
    type: Boolean,
    default: false,
  },
  hasBtn: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
  },
  iconPathCount: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
    <div class="w-full">
        <input type="text" class="bg-white rounded-2xl lg:h-16 h-11 w-full px-3" />
    </div>
</template>