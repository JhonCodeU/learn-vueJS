const app = Vue.createApp({
    data() {
        return {
            number: 0,
        };
    },
    watch: {
        result() {
            console.log('Watcher executing...');
            const that = this;
            setTimeout(() => {
                that.number = 0;
            }, 5000);
        }
    },
    computed: {
        result() {
            if (this.number < 37) {
                return 'Not there yet!';
            }else if(this.number === 37) {
                return 'You found it!';
            } else {
                return 'Too much!';
            }
        }
    },
    methods: {
        add(num) {
            this.number = this.number + num;
        }
    }
})

app.mount('#assignment')