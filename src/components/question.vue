<template>
  <div>
    <md-card>
      <div>
        <div>
          <!-- Affichage de questions -->
          <h1>{{titre}}</h1>
          <md-checkbox v-model="rep1" v-for="r in reponses" v-bind:key="r">{{r.reponses}}</md-checkbox>
          <br />
          <router-link :to="{name: 'result'}">
            <md-button type="submit" class="md-primary">Répondre</md-button>
          </router-link>
        </div>
      </div>
    </md-card>
  </div>
</template>


<script>
export default {
  name: "question",
  data: () => ({
    rep1: false,
    rep2: false,
    rep3: false
  }),
  props: {
    titre: String,
    reponses: Array
  }
};
</script>