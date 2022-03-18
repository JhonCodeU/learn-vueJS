<template>
  <div>
    <h2>The favorite value</h2>
    <h3>{{ counter }}</h3>
    <p>We do more...</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>
