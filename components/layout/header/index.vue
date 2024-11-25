<script setup>
import { ref } from "vue";
let menuActive = ref(false);
let BackdropActive = ref(false);
function changeMenu() {
  menuActive.value = !menuActive.value;
  BackdropActive.value = !BackdropActive.value;
}
function changeBackdrop() {
  menuActive.value = false;
  BackdropActive.value = false;
}
</script>


<template>
  <header class="bg-primary-gradient relative">
    <GenericBackdrop @tochBackground="changeBackdrop()" :isActive="BackdropActive" />
    <LayoutHeaderMenu :isActive="menuActive" @closeMenu="changeMenu()" />
    <LayoutHeaderTop @changeMenuButton="changeMenu()" />
    <LayoutHeaderMain />
  </header>
</template>