<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
const logoJobhun = "../../public/jobhunlogo.png"
const isScrolled = ref(false);

function handleScroll() {
  if (window.pageYOffset > 150) {
    isScrolled.value = true;
    document.querySelector('.navbar').classList.add('bg-success');
    document.querySelector('.navbar').classList.add('navbar-dark');
    document.querySelector('.navbar').classList.remove('navbar-light');
    document.querySelector('.navbar').classList.add('border-light');
    document.querySelector('.navbar').classList.remove('border-success');
    
  } else if (window.pageYOffset <= 150) {
    isScrolled.value = false;
    document.querySelector('.navbar').classList.remove('bg-success');
    document.querySelector('.navbar').classList.remove('navbar-dark');
    document.querySelector('.navbar').classList.add('navbar-light');
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
<template lang="">
  <div>
    <nav class="navbar navbar-expand-lg border-bottom border-success fixed-top" :class="{ 'bg-success': isScrolled }">
      <div class="container">
        <a class="navbar-brand" href="#">
            <img :src="logoJobhun" alt="" width=125>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <router-link to="/" class="nav-link"  :class="{ active: $route.path === '/' }"><h5>Home</h5></router-link>
            <router-link to ="/movie" class="nav-link"  :class="{ active: $route.path === '/movie' }"><h5>Movies</h5></router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navbar {
  transition: all 0.3s;
}

</style>
