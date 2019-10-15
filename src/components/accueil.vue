<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
// export default {
//   name: "accueil",
//   props: {
//     msg: String
//   }
// };
export default {
  name: "TextFields",
  msg: String,
  data: () => ({
    initial: "Initial Value",
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null,
    message: this.msg
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
