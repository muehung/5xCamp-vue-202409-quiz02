<script setup>
const searchText = defineModel('searchText');
</script>
<template>
    <p class="mb-3">
        站點名稱搜尋: <input class="border" type="text" v-model="searchText">
      </p>
</template>