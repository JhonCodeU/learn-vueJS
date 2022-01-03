const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Master Vue.js with amazing course',
            courseGoalB: 'Finish the course and learn vuejs',
            vueLink: 'https://vuejs.org/',
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            if (randomNumber % 2 === 0) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');