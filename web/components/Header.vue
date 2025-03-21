<script setup lang="ts">
import Nav from './Nav.vue'
</script>

<template>
  <header id="header-site">
    <Nav />
    <div class="inner">
      <div class="logo">
        <NuxtLink to="/">
          <img src="/lambert-lenack-logo.svg" alt="Lambert Lénack" />
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 51;
}
.inner {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  pointer-events: none;
}
.logo {
  width: 100px;
  pointer-events: auto;
}
</style>
