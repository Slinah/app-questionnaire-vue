<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <accueil msg="Bienvenue sur l'application" />
  </div>
</template>

<script>
// @ is an alias to /src
import accueil from "@/components/accueil.vue";

export default {
  name: "home",
  components: {
    accueil
  }
};
</script>
