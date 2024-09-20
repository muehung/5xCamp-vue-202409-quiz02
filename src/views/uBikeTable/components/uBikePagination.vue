<script setup>
const pagerEnd = defineModel('pagerEnd');
const currentPage = defineModel('currentPage');
const pagerAddAmount = defineModel('pagerAddAmount');
const totalPageCount = defineModel('totalPageCount');
const setPage = defineModel('setPage');
// const props = defineProps({
//   setPage: null,

// });

</script>
<template>
    <nav v-if="pagerEnd > 0">
        <ul class="pagination">
    
          <li @click.prevent="setPage(1)" class="page-item">
            <a class="page-link" href>第一頁</a>
          </li>
          <li @click.prevent="setPage(currentPage - 1)" class="page-item">
            <a class="page-link" href>&lt;</a>
          </li>
    
          <li v-for="i in pagerEnd" :class="{ active: i + pagerAddAmount === currentPage }" :key="i"
            @click.prevent="setPage(i + pagerAddAmount)" class="page-item">
            <a class="page-link" href>{{ i + pagerAddAmount }}</a>
          </li>
    
          <li @click.prevent="setPage(currentPage + 1)" class="page-item">
            <a class="page-link" href>&gt;</a>
          </li>
          <li @click.prevent="setPage(totalPageCount)" class="page-item">
            <a class="page-link" href>最末頁</a>
          </li>
        </ul>
      </nav>
</template>
<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
}
</style>