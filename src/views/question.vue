<template>
  <div>
    <h1>Question</h1>
    <form class="md-layout">
      <md-field>
        <label>Nom</label>
        <md-input v-model="initial"></md-input>
      </md-field>
      <md-field>
        <label>Prénom</label>
        <md-input v-model="initial"></md-input>
      </md-field>
      <md-field>
        <label>Entreprise</label>
        <md-input v-model="initial"></md-input>
      </md-field>

      <md-card-actions>
        <router-link :to="{name: 'question'}">
          <md-button type="submit" class="md-primary">Commencer le test</md-button>
        </router-link>
      </md-card-actions>
    </form>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "question",
  data: () => ({
    initial: null
  }),
  components: {}
};
</script>