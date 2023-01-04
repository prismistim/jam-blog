<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ListItem from './ListItem.vue'
import { Article } from '~~/types/Article'

const props = defineProps<{
  articles: Article[] | undefined
  totalCount: number | undefined
}>()
const { articles, totalCount } = toRefs(props)
</script>

<template>
  <template v-if="totalCount === 0"> Not Found</template>
  <template v-else>
    <div class="flex flex-col space-y-4">
      <ListItem
        v-for="article of articles"
        :key="article.id"
        :article="article"
      ></ListItem></div
  ></template>
</template>
