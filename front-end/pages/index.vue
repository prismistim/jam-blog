<script setup lang="ts">
const { data } = await useFetch('/api/article', {
  pick: ['articles', 'totalCount']
})
const articles = data.value?.articles
const totalCount = data.value?.totalCount
</script>

<template>
  <NuxtLayout name="default">
    <ArticleList :articles="articles" :total-count="totalCount"></ArticleList>
  </NuxtLayout>
</template>
