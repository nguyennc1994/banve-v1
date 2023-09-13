<script setup>
import HeaderView from '../components/HeaderView.vue'
import FooterView from '../components/FooterView.vue'

import BannerSlide from '../components/BannerSlide.vue'
import AboutHomeView from '../components/AboutHomeView.vue'
import MapView from '../components/MapView.vue'
import NoteView from '../components/NoteView.vue'
import BookTicketView from '../components/BookTicketView.vue'
</script>
<template>
  <HeaderView></HeaderView>
  <main>
    <BannerSlide></BannerSlide>
    <AboutHomeView></AboutHomeView>
    <MapView></MapView>
    <NoteView></NoteView>
    <BookTicketView></BookTicketView>
  </main>
  <FooterView></FooterView>
</template>
