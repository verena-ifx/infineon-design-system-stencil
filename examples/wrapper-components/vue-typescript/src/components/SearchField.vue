<template>
  <div>
    <h2>Search Field</h2>
    <h3>Using v-model</h3>

    <ifx-search-field v-model="searchInput" disabled="false" size='m' show-delete-icon="true"></ifx-search-field>
    <br />
    <br />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const searchInput = ref('');

onMounted(() => {
  updateSearchBarAndSearchInput();
  setInterval(updateSearchBarAndSearchInput, 10000);
})


function updateSearchBarAndSearchInput() {
  console.log("updating search field")
  searchInput.value = searchInput.value + "+1";
}
</script>

<style scoped></style>