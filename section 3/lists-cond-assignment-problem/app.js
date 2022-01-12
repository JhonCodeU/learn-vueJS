const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [],
            hidden: true
        }
    },
    methods: {
        addTask() { 
            this.tasks.push(this.newTask);
            this.newTask = '';
        },
        removeTask(index) {
            this.tasks.splice(index, 1);
        },
        toggleHidden() {
            this.hidden = !this.hidden;
        }
    }
})

app.mount('#assignment');