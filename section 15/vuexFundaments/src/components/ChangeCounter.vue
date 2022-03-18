<template>
  <button @click="increment">Add 2 change</button
  ><button @click="increase({ value: 10 })">Add 2 change</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   // this.$store.commit('increase', { value: 10 });
    //   // this.$store.dispatch('increase', { value: 10 });

    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: 10,
    //   });
    // },
    //...mapActions(['increment', 'increase']),
    ...mapActions('numbers', {
      increment: 'increment',
      increase: 'increase',
    }),
  },
};
</script>
