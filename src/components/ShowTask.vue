<template>
    <Navigation />
    <h1 class="text-center p-4 text-xl font-semibold">All task are showing here</h1>
    <div class="md:flex md:flex-wrap gap-8 justify-evenly">
        <div class="bg-[#A9CCE3] rounded shadow-lg md:w-96 mb-4" v-for="item in Tasks" :key="item.id">
            <h1 class="text-center p-2 text-xl font-semibold">Task : {{ item.id }}</h1>
            <div class=" px-2 text-lg ">
                <span class="font-medium">Task Status : </span>{{ item.status }}
                <div> <span class="font-medium">Created Date : </span>{{ item.date }}</div>
            </div>
            <p class="p-2">
                <span class="text-lg font-medium">Task : </span> {{ item.newTask }}
            </p>
            <div class="p-2 ">
                <RouterLink :to="'/update-task/' + item.id"
                    class="bg-[#145A32] block p-2 my-2 text-center rounded text-white">Update Task</RouterLink>
                <button type="button" class="bg-[#FF0000] w-full px-4 py-2 rounded text-white"
                    v-on:click="deleteTask(item.id)">Delete Task</button>
                    <div class="p-2 ">
                <label>
                    <input type="checkbox" v-model="item.isChecked" @change="updateTask(item)">
                    Task Complete
                </label>
            </div>
            </div>
        </div>

    </div>
</template>

<script>
import Navigation from './Navigation.vue';
import axios from 'axios';

export default {
    name: 'ShowTask',
    components: {
        Navigation
    },
    data() {
        return {
            tasks: {
                isChecked: true
            },
            Tasks: []
        }
    },
    methods: {
        async deleteTask(id) {
            let result = await axios.delete("http://localhost:3000/tasks/" + id);
            console.log("Deleting...", result);
            if (result.status == 200) {
                alert("Task has been deleted");
                this.loadTask();
            }
        },
        async loadTask() {
            let result = await axios.get("http://localhost:3000/tasks");
            console.log("Results are ... ", result);
            this.Tasks = result.data;
        },
        async updateTask(task) {
            let result = await axios.put("http://localhost:3000/tasks/" + task.id, {
                status: this.tasks.isChecked ? 'Completed' : 'pending'
            });
            console.log("Updating...", result);
            if (result.status == 200) {
                alert("Task status updated");
                this.loadTask();
            }
        }
    },
    mounted() {
        this.loadTask();
    },
}
</script>