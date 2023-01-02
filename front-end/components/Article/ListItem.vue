<script setup lang="ts">
import { Article } from '~~/types/Article'

const props = defineProps<{ article: Article }>()
const { article } = toRefs(props)
</script>

<template>
  <li class="list-none p-4 bg-neutral-50">
    <div class="grid grid-cols-2 w-1/2">
      <span>{{ article.publishedAt }}</span>
    </div>
    <div>{{ article.title }}</div>
  </li>
</template>
