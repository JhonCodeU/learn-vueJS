const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '+49 123456789', email: 'manuel@gmail.com' },
                { id: 'jose', name: 'Jose hernandez', phone: '+56 546546546', email: 'jose@gmail.com' },
            ],
        }
    }
})

app.component('friend-contact', {
    template: `
      <li">
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails(friend.id)">
          {{detailsAreVisible ? 'Hide Details' : 'Show Details'}}
        </button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone: </strong>{{friend.phone}}</li>
          <li><strong>Email: </strong>{{friend.email}}</li>
        </ul>
      </li>`,
    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '+49 123456789',
                email: 'manuel@gmail.com',
            },
        }
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});
app.mount('#app')