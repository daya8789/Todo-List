<template>
    <Navigation />
    <div class="p-8">
        <div class="bg-[#C39BD3] w-1/2 m-auto p-4 rounded">
            <h1 class="text-center p-2 text-xl font-semibold">Add Your Task</h1>
            <div>
                <input type="text" v-model="tasks.newTask" placeholder="Write Here . . . ."
                    class="my-4 p-2 w-full rounded" required>

                <button type="button" v-on:click="addTask"
                    class="block bg-[#2874A6] p-2 my-4 w-full rounded text-white shadow-xl">ADD TASK</button>

            </div>
        </div>
    </div>
</template>
<script>
import Navigation from './Navigation.vue';
import axios from 'axios';

export default {
    name: 'AddTask',
    components: {
        Navigation
    },
    data() {
        return {
            tasks: {
                newTask: '',
                date: '',
                status: 'Not Completed'
            }
        }
    },
    methods: {
        async addTask() {
            let result = await axios.post('http://localhost:3000/tasks', {
                newTask: this.tasks.newTask.trim(),
                date: this.tasks.date,
                status: this.tasks.status
            })
            console.log('Task added...', result);

            if (result.status == 201) {
                alert("Task added");
                this.$router.push({ name: 'ShowTask' });
            }
        },
        getCurrentDate() {
            const now = new Date();
            const formattedDate = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;
            console.log("Auto date is...", formattedDate);
            this.tasks.date = formattedDate;

        }
    },
    mounted(){
        this.getCurrentDate();
    }

}
</script>