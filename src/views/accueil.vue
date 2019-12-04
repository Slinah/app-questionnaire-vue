<template>
  <!-- Affichage du formulaire d'Entreprise -->
  <div class="hello">
    <form class="md-layout">
      <md-field>
        <label>Nom</label>
        <md-input v-model="Nom"></md-input>
      </md-field>
      <md-field>
        <label>Prénom</label>
        <md-input v-model="Prenom"></md-input>
      </md-field>
      <md-field>
        <label>Entreprise</label>
        <md-input v-model="Entreprise"></md-input>
      </md-field>

      <md-card-actions>
        <router-link :to="{name: 'questionnaire'}">
          <md-button type="submit" class="md-primary">Commencer le test</md-button>
        </router-link>
      </md-card-actions>
    </form>
  </div>
</template>

<script>
export default {
  name: "TextFields",
  data: () => ({
    Nom: "",
    Prenom: "",
    Entreprise: "",

  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
