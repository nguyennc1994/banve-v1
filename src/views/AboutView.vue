<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'
</script>

<template>
  <HeaderView></HeaderView>

  <main>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
  </main>
  <FooterView></FooterView>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
