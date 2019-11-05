<template>
  <div>
    <md-card>
      <div>
        <div>
          <h1>Qui est mon voisin</h1>
          <md-checkbox v-model="rep1">{{titre}}</md-checkbox>
          <md-checkbox v-model="rep2">Anais</md-checkbox>
          <md-checkbox v-model="rep3">Le mur</md-checkbox>
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
// @ is an alias to /src

export default {
  name: "question",
  data: () => ({
    rep1: false,
    rep2: false,
    rep3: false
  }),
  props: {
    titre: String
  }
};
</script>