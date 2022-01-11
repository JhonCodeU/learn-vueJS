const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: '',
      confirmedName: ''
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   }
    //   this.fullName = value + ' ' + this.lastName;
    // },
    // lastName(value) {
    //   if (value === '') {
    //     this.fullName = '';
    //   }
    //   this.fullName = this.name + ' ' + value;
    // }
  },
  computed: {
    fullName() {
        console.log('Runing again...');
      if (this.name === '') {
        return 'Please enter a name';
      }
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullName() {
      //console.log('Runing again...');
      if (this.name === '') {
        return 'Please enter a name';
      }
      return this.name + ' ' + 'Arcila Castano';
    },
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
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
