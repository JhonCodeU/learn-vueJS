const app = Vue.createApp({
    data() {
        return {
            user: {
                name: '',
                lastName: '',
            }
        };
    },
    methods: {
        showAlert() {
            alert(`Alerta!!`);
        },
        setNameUser(event) {
            this.user.name = event.target.value;
        },
        setLastName(e) {
            this.user.lastName = e.target.value;
        }
    }
})

app.mount('#assignment');