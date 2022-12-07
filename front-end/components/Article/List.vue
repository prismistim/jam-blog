<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ListItem from './ListItem.vue'

type Category = {
  name: string
}

type Article = {
  title: string
  createdAt: string
  updatedAt: string
  content: string
  category: Category
}

const articles: Article[] = [
  {
    title: 'hogehoge',
    createdAt: '2022-01-01 10:10',
    updatedAt: '2022-01-01 10:10',
    content: 'hogehoge',
    category: {
      name: 'test'
    }
  },
  {
    title: 'hogehoge',
    createdAt: '2022-01-01 10:10',
    updatedAt: '2022-01-01 10:10',
    content: 'hogehoge',
    category: {
      name: 'test'
    }
  }
]
</script>

<template>
  <div class="flex flex-col space-y-4">
    <ListItem
      v-for="item of articles"
      :key="item.title"
      :title="item.title"
      :created-at="item.createdAt"
      :updated-at="item.updatedAt"
      :content="item.content"
      :category="item.category"
    ></ListItem>
  </div>
</template>
