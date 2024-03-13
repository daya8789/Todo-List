<template>
    <Navigation />
    <div class="p-8">
        <div class="bg-[#C39BD3] w-1/2 m-auto p-4 rounded">
            <h1 class="text-center p-2 text-xl font-semibold">Add Your Task</h1>
            <form action="">
                <input type="text" v-model="tasks.newTask" placeholder="Write Here . . . ."
                    class="my-4 p-2 w-full rounded">
                <input type="text" v-model="tasks.status" placeholder="Have you completed this task? {Yes/No}"
                    class="my-4 p-2 w-full rounded">
                <input type="date" v-model="tasks.date" class="my-4 p-2 w-full rounded">
                <button type="button" v-on:click="updateTask"
                    class="block bg-[#2874A6] p-2 my-4 w-full rounded text-white shadow-xl">Update Task</button>
            </form>
        </div>
    </div>
</template>
<script>
import Navigation from './Navigation.vue';
import axios from 'axios';
export default {
    name: 'UpdateTask',
    components: {
        Navigation
    },
    data() {
        return {
            tasks: {
                newTask: '',
                date: '',
                status: ''
            }
        }
    },
    methods: {
        async updateTask() {
            let result = await axios.put('http://localhost:3000/tasks/' + this.$route.params.id, {
                newTask: this.tasks.newTask.trim(),
                date: this.tasks.date,
                status: this.tasks.status
            });
            console.log("putting data ares", result);

            if (result.status == 200) {
                this.$router.push({ name: 'ShowTask' });
            }
        }
    },
    async mounted() {
        let result = await axios.get("http://localhost:3000/tasks/" + this.$route.params.id);
        console.log("update ares dfddddd", result);
        this.tasks = result.data;

    }
}
</script>