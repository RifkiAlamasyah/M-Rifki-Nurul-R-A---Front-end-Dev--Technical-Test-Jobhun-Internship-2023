<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";

const movies = ref([]);

const fetchMovies = async () => {
    try {
        const response = await axios.get(
            "http://api.tvmaze.com/search/shows?q=girls"
        );
        movies.value = response.data;
        console.log(movies);
    } catch (error) {
        console.error(error);
    }
};

onMounted(fetchMovies);

const searchTerm = ref("");
const diplayedMovie = computed(() => {
    if (searchTerm === "") {
        return movies;
    } else {
        return movies.value.filter((movie) => {
            return movie.show.name
                .toLowerCase()
                .includes(searchTerm.value.toLowerCase());
        });
    }
});
</script>

<template>
    <div class="container">
        <h1 class="text-center tigaDtext">Movies</h1>
        <div class="row mb-4">
            <div class="col-md-4">
                <input type="text" v-model="searchTerm" placeholder="Cari Movie" class="form-control" />
            </div>
        </div>
        <div v-if="diplayedMovie.length">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-3" v-for="movie in diplayedMovie" :key="movie.show.id">
                    <div class="card border border-success fade-in-down" style="width: 18rem">
                        <img :src="movie.show.image?.medium" class="card-img-top" :alt="movie.show.name" />
                        <div class="card-body">
                            <h5 class="card-title">{{ movie.show.name }}</h5>
                            <router-link :to="{ name: 'moviedetail', params: { id: movie.show.id } }"
                                class="btn btn-outline-success">
                                Detail Movie
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <h3>Movies Tidak di temukan</h3>
        </div>
    </div>
</template>
<style scoped>
.card {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}

h1{
    font-size: 60px;
}
</style>
