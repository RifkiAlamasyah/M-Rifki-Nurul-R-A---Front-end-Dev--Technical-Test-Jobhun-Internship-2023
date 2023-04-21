<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
<Navbar class="mt-fixedTopNav"/>
<RouterView></RouterView>
<Footer class="mt-fixedTopNav" />

</template>

<style scoped>
.mt-fixedTopNav{
  margin-top: 100px;
}
</style>
