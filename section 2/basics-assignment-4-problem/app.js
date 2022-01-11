const app = Vue.createApp({
    data() {
        return {
            inputUser: '',
            inlineStyling: '',
            boxSelected: false,
        }
    },
    computed: {
        boxClases() {
            return {hidden: this.boxSelected}
        }
    },
    methods: {
        toggle() {
            this.boxSelected = !this.boxSelected;
        }
    }
})

app.mount('#assignment');