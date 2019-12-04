<template>
  <div>
    <!-- Création de questionnaire de questions -->
    <md-card v-show="!isFinished">
      <md-card-header>
        <div class="md-title">Questions :</div>
      </md-card-header>

      <md-card-content>
        <question :question="questions[currentQuestion]" />
      </md-card-content>

      <md-card-actions>
        <md-button v-if="!isLastQuestion" @click="nextQuestion">Suivant</md-button>
        <md-button v-if="isLastQuestion" @click="terminerQuestionnaire">Terminer</md-button>
      </md-card-actions>
    </md-card>
    <div class="title" v-show="isFinished">
      <h1>Nombre de bonne réponses: {{nbBonneReponse}}</h1>
    </div>
  </div>
</template>

<script>
import question from "@/components/question.vue";

export default {
  name: "questionnaire",
  msg: String,
  // Structure des questions
  data: () => ({
    currentQuestion: 0,
    nbBonneReponse: 0,
    isFinished: false,
    questions: [
      {
        id: 1,
        titre: "Quel est mon voisin ?",
        reponses: [
          {
            id: 1,
            libelle: "Jule",
            answer: false,
            correctAnswer: true
          },
          {
            id: 2,
            libelle: "Anaïs",
            answer: false,
            correctAnswer: false
          }
        ]
      },
      {
        id: 2,
        titre: "Quel est mon repas du midi ?",
        reponses: [
          {
            id: 1,
            libelle: "Un sandwich",
            answer: false,
            correctAnswer: false
          },
          {
            id: 2,
            libelle: "Une pizza",
            answer: false,
            correctAnswer: false
          },
          {
            id: 3,
            libelle: "Alexis",
            answer: false,
            correctAnswer: true
          }
        ]
      }
    ]
  }),
  computed: {
    isLastQuestion() {
      console.log(this.currentQuestion, this.questions.length - 1);
      if (this.currentQuestion == this.questions.length - 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    nextQuestion() {
      this.currentQuestion++;
    },

    terminerQuestionnaire() {
      let tempnbBonneReponse = 0;
      this.questions.forEach(question => {
        let isQuestionTrue = 0;
        question.reponses.forEach(reponse => {
          if (reponse.answer === reponse.correctAnswer) {
            isQuestionTrue++;
            console.log("isQueston true", isQuestionTrue);
          }
        });
        if (isQuestionTrue === question.reponses.length) {
          console.log("hello");
          tempnbBonneReponse++;
        }
      });
      this.nbBonneReponse = tempnbBonneReponse;
      this.isFinished = !this.isFinished;
    }
  },
  components: {
    question
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
  color: white;
}
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
