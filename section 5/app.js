const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log('beforeCreate()');
  },
  created() {
    console.log('created()');
  },
  beforeMount() { 
    console.log('beforeMount()');
  },
  mounted() {
    console.log('mounted()');
  },
  beforeUpdate() {
    console.log('beforeUpdate()');
  },
  updated() { 
    console.log('updated()');
  },
  beforeunmount() {
    console.log('beforeunmount()');
  },
  unmounted() { 
    console.log('unmounted()');
  }
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000);

const app2 = Vue.createApp({
  template: '<p>{{ favoriteMeal }}</p>',
  data() {
    return {
      favoriteMeal: 'Pizza',
    };
  }
})
app2.mount('#app2');

//reactividad con javascript
const data = {
  message: 'Hello javaScript!',
}

const handler = {
  set(target, key, value) {
    console.log(target, key, value);
    console.log(`set ${key} to ${value}`);
    return Reflect.set(target, key, value);
  }
}

const proxy = new Proxy(data, handler);
proxy.message = 'Hello Vue!';