<script setup>
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
  <header class="shadow-dark-shadow">
    <GenericBackdrop @tochBackground="changeBackdrop()" :isActive="BackdropActive" />
    <LayoutHeaderMenu :isActive="menuActive" @closeMenu="changeMenu()" />
    <LayoutPagesHeaderTop @changeMenuButton="changeMenu()"/>
  </header>
</template>