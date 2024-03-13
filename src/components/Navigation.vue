<template>
    <div class="bg-[#F7DC6F] p-2 m-auto text-lg flex justify-evenly">
        <div class="hover:bg-[#145A32] hover:text-white p-2 rounded">
            <RouterLink to="/add-task">Add task</RouterLink>
        </div>
        <div class="hover:bg-[#145A32] hover:text-white p-2 rounded">
            <RouterLink to="/show-task">Show all task</RouterLink>
        </div>
    </div>
</template>
<script>
    export default{
        name:'Navigation'
    }
</script>