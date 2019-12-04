<template>
  <div>
    <md-card>
      <div>
        <div>
          <!-- Affichage de questions -->
          <h1>{{question.titre}}</h1>
          <md-checkbox v-for="reponse in question.reponses" v-bind:key="reponse.id" v-model="reponse.answer">{{reponse.libelle}}</md-checkbox>
        </div>
      </div>
    </md-card>
  </div>
</template>


<script>
export default {
  name: "question",
  props: ["question"]
};
</script>