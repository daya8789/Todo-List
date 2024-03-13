<template>
  
  <div class="bg-[#1C2833] text-white p-2">
    <h1 class="text-center text-lg md:text-2xl">To do List</h1>
  </div>
  <div class="p-4">
    <router-view/>
    <!-- class="bg-[#EAEDED]" -->
  </div>
</template>

<script>
  export default{
    name:'App'
  }
</script>

<style scoped></style>
