<script setup>
const setSort = defineModel('setSort');
const currentSort = defineModel('currentSort');
const isSortDesc = defineModel('isSortDesc');
const searchText = defineModel('searchText');
const keywordsHighlight = defineModel('keywordsHighlight');
const slicedUbikeStops = defineModel('slicedUbikeStops');

// const props = defineProps({
//   keywordsHighlight: Function,
//   slicedUbikeStops: Function,
// })

</script>
<template>
    <table class="table table-striped">
        <thead>
          <tr>
            <th @click="setSort('sno')">
              #
              <span v-show="currentSort === 'sno'">
                <i class="fa" :class="isSortDesc ? 'fa-sort-desc' : 'fa-sort-asc'" aria-hidden="true"></i>
              </span>
            </th>
            <th>
              場站名稱
            </th>
            <th>
              場站區域
            </th>
            <th @click="setSort('available_return_bikes')" class="pointer">
              目前可用車輛
              <span v-show="currentSort === 'available_return_bikes'">
                <i class="fa" :class="isSortDesc ? 'fa-sort-desc' : 'fa-sort-asc'" aria-hidden="true"></i>
              </span>
            </th>
            <th @click="setSort('total')" class="pointer">
              總停車格
              <span v-show="currentSort === 'total'">
                <i class="fa" :class="isSortDesc ? 'fa-sort-desc' : 'fa-sort-asc'" aria-hidden="true"></i>
              </span>
            </th>
            <th>
              資料更新時間
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 替換成 slicedUbikeStops -->
          <tr v-for="s in slicedUbikeStops" :key="s.sno">
            <td>{{ s.sno }}</td>
            <td v-html="keywordsHighlight(s.sna, searchText)"></td>
            <td>{{ s.sarea }}</td>
            <td>{{ s.available_return_bikes }}</td>
            <td>{{ s.total }}</td>
            <td>{{ (s.mday) }}</td>
          </tr>
        </tbody>
      </table>
</template>
<style lang="scss" scoped>
@media (max-width: 768px) {
  .table td, .table th {
    padding: .5rem .25rem;
  }
}
</style>