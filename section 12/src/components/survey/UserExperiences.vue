<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences"
          >Load Submitted Experiences</base-button
        >
      </div>
      <p v-if="isLoading && results.length > 0">Loading...</p>
      <p v-else-if="!isLoading && error">
        {{ error }}
      </p>
      <p v-else-if="!isLoading && (results.length === 0 || !results)">
        No stored experiences found. Start adding some survey results first
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.userName"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async loadExperiences() {
      this.isLoading = true;
      this.error = null;
      await fetch(
        'https://vue-http-demo-4b483-default-rtdb.firebaseio.com/surveys.json'
      )
        .then((response) => response.json())
        .then((data) => {
          this.isLoading = false;
          this.results = Object.values(data);
          console.log(this.results);
        })
        .catch((error) => {
          this.isLoading = false;
          console.log(error);
          this.error = 'Failed to fetch data - Please try again later';
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
