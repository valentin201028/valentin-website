<script setup>
// A konfigurációból kivesszük a backend URL-t (amit a .env-be írtunk)
// Ha véletlenül nem lenne beállítva, akkor a hardcoded stringet használja (biztonsági tartalék)
const STRAPI_URL = "https://valentin-website-api.onrender.com";

// Adatok lekérése a useFetch-el (ez a Nuxt varázslata)
const { data: response, pending } = await useFetch(
  `${STRAPI_URL}/api/introduction?populate=*`
);

// Segédfüggvények az adatok kinyeréséhez
// Strapi verziótól függően az adat lehet a 'data.attributes' vagy simán 'data' alatt
const introduction = computed(() => {
  if (!response.value?.data) return null;
  // Strapi v4 struktúra kezelése (attributes) vagy v5 (lapos)
  return response.value.data.attributes || response.value.data;
});

const imageUrl = computed(() => {
  if (!introduction.value?.photo?.data) return null;

  // A kép URL kinyerése
  const relativeUrl = introduction.value.photo.data.attributes
    ? introduction.value.photo.data.attributes.url
    : introduction.value.photo.data.url;

  return `${STRAPI_URL}${relativeUrl}`;
});
</script>

<template>
  <div class="container">
    <div v-if="pending">Betöltés...</div>

    <div v-else-if="introduction" class="profile-card">
      <img
        v-if="imageUrl"
        :src="imageUrl"
        alt="Profilkép"
        class="profile-image"
      />

      <h1>{{ introduction.name }}</h1>
      <h2>{{ introduction.position }}</h2>

      <!-- <p>{{ introduction.description }}</p> -->
    </div>

    <div v-else class="error">Nem sikerült betölteni az adatokat. :(</div>
  </div>
</template>

<style scoped>
/* Egy kis alap stílus, hogy ne essen szét */
.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 20px;
  font-family: sans-serif;
}
.profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%; /* Kerek kép */
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #333;
  margin-bottom: 5px;
}
h2 {
  color: #666;
  font-weight: normal;
  margin-top: 0;
}
</style>
