const app = Vue.createApp({
    data() {
        return {
            detailsAreVisible: false,
            friends: [
                { id: 'manuel', name: 'Manuel Lorenz', phone: '+49 123456789', email: 'manuel@gmail.com' },
                { id: 'jose', name: 'Jose hernandez', phone: '+56 546546546', email: 'jose@gmail.com' },
            ],
        }
    },
    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app')