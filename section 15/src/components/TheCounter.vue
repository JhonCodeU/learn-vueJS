<template>
  <div>
    <h2>The counter</h2>
    <h3>{{ finalCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    // counter() {
    //   return this.$store.state.finalCounter;
    // },
    ...mapGetters('numbers', {
      finalCounter: 'finalCounter',
    }),
  },
};
</script>
