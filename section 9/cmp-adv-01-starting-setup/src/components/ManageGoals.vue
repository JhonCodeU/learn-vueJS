<template>
  <div>
    <h2>Manage Goals</h2>
    <button @click="setGoal" ref="goal">Set Goal</button>
    <input type="text" />
    <teleport to="body">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid</h2>
        <p>Please enter a valid goal</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
