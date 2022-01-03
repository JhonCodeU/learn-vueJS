const app = Vue.createApp({
    data() {
        return {
            person: {
                name: 'John Arcila Castano',
                img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
                age: 23
            }
        }
    },
    methods: {
        //RANDOM NUMBER BETWEEN 0 AND 1
        randomNumber() {
            return Math.random().toFixed(2);
        }
    }
});

app.mount('#assignment');