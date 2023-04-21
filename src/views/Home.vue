<script setup></script>
<template lang="">
  <div class="row">
    <div class ="col-lg-6 offset-lg-3 col-10 offset-1">
      <div class="container bg-gray  rounded border border-success">
    <i><h1 class="display-4 text-center fw-bold">Thanks...</h1></i>
    <p class="lead fw-bolder fade-in-down">
        Terimakasih atas kesempatan yang diberikan kepada saya untuk melanjutkan ke tahap tes ini. Saya sangat berharap bahwa hasil dari tes ini akan membuktikan bahwa saya adalah kandidat yang tepat untuk menjadi bagian dari peserta internship sebagai front-end dev serta dapat lolos ke tahap selanjutnya.
    </p>
    <hr class="my-4" />
 
    <p class="lead">
      <router-link  to="/movie" class="btn btn-success">Click Untuk Melihat Hasil nya</router-link> 
    </p>
  </div>
    </div>
  </div>
 
</template>

<style scoped>
.bg-gray{
    background-color: #eee;
}
.container{
  padding: 50px;
}

.btn.btn-success{
  padding: 10px
}
@media (max-width: 728px) {
  .lead{
    font-size: 18px;
  }

  .container{
  padding: 10px;
}
}

</style>
