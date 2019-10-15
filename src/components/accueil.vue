<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <md-field>
      <label>Initial Value</label>
      <md-input v-model="initial"></md-input>
    </md-field>

    <md-field>
      <label>Type here!</label>
      <md-input v-model="type"></md-input>
      <span class="md-helper-text">Helper text</span>
    </md-field>

    <md-field>
      <label>With label</label>
      <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
    </md-field>

    <md-field md-inline>
      <label>Inline</label>
      <md-input v-model="inline"></md-input>
    </md-field>

    <md-field>
      <label>Number</label>
      <md-input v-model="number" type="number"></md-input>
    </md-field>

    <md-field>
      <label>Textarea</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>

    <md-field>
      <label>Textarea with Autogrow</label>
      <md-textarea v-model="autogrow" md-autogrow></md-textarea>
    </md-field>

    <md-field>
      <label>Disabled</label>
      <md-input v-model="disabled" disabled></md-input>
    </md-field>
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
  data: () => ({
    initial: "Initial Value",
    type: null,
    withLabel: null,
    inline: null,
    number: null,
    textarea: null,
    autogrow: null,
    disabled: null
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
