<script setup lang="ts">
const { data } = await useFetch('/api/article', {
  pick: ['articles', 'totalCount']
})

const articles = reactive(data.value?.articles || [])
const totalCount = ref(data.value?.totalCount || 0)
</script>

<template>
  <NuxtLayout name="default">
    <ArticleList :articles="articles" :total-count="totalCount"></ArticleList>
  </NuxtLayout>
</template>
