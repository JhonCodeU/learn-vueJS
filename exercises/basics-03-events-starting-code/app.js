const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(event, name) {
      this.name = event.target.value + name;
    },
    add(num) { 
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert(`Submitted!!`);
    },
    confirmInput() {
      this.confirmedName = this.name;
    }
  }
});

app.mount('#events');
