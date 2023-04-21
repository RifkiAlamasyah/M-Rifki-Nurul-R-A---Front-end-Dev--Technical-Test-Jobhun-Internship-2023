<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import axios from "axios";

const movie = ref([]);
const props = defineProps({
  id: { type: String, required: true },
});

const fetchMoviesDetail = async () => {
  try {
    const response = await axios.get(`http://api.tvmaze.com/shows/${props.id}`);
    movie.value = response.data;
    console.log(movie);
  } catch (error) {
    console.error(error);
  }
};

onMounted(fetchMoviesDetail,  window.scrollTo(0, 0));

onBeforeUnmount(() => {
  movie.value = [];
});
</script>
<template lang="">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 mb-3">
        <div class="p-5 rounded border border-success">
          <center>
            <img :src="movie.image?.medium" alt="" class="imgmobile" />
          </center>

          <i
            ><h1 class="display-4 text-center fw-bold">{{ movie.name }}</h1></i
          >
          <div v-if="movie.summary !== null">
            <p class="lead" v-html="movie.summary"></p>
          </div>
          <div v-else>
            <p class="lead">
              <b class="fw-bold">This is The Best Movie</b> you must watching
            </p>
          </div>
          <hr class="my-4" />
          <ul class="list-group fs-5 mb-3">
            <li class="list-group-item">
              Genres :
              <span v-for="(genre, index) in movie.genres" :key="index"
                >{{ genre
                }}{{ index < movie.genres.length - 1 ? ", " : "" }}</span
              >
            </li>
            <li class="list-group-item">Language : {{ movie.language }}</li>
            <li class="list-group-item">
              Realise date : {{ movie.premiered }}
            </li>
            <li class="list-group-item">
              Rating : {{ movie.rating?.average }}
            </li>
          </ul>
          <p class="lead">
            <router-link to="/movie" class="btn btn-success btn-lg"
              >Back To List Movie</router-link
            >
          </p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="thumb border border-success imgdesktop fade-in-down">
          <img :src="movie.image?.original" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.thumb {
  width: 500px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

.thumb img {
  width: 100%;
}

.imgmobile {
  display: none;
}

.imgdesktop {
  display: block;
}

@media (max-width: 728px) {
  .imgmobile {
    display: block;
    /* tampilkan pada ukuran layar mobile */
  }

  .imgdesktop {
    display: none;
  }
  
}
</style>
