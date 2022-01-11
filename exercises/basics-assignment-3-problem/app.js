const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            comment: '',
        };
    },
    watch: {
        counter(value) { 
            if (value > 37) {
                setTimeout(this.counter = 0, 5000)
                this.comment = 'Too much!';
            }
            this.comment = 'Not there yet!';
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        }
    }
})

app.mount('#assignment')