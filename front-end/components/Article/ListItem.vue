<script setup lang="ts">
type Category = {
  name: string
}

type Props = {
  title: string
  createdAt: string
  updatedAt: string
  content: string
  category: Category
}

const props = withDefaults(defineProps<Props>(), {
  title: 'テスト記事',
  createdAt: '2022-01-01 10:10',
  updatedAt: '2022-01-01 10:10'
})
</script>

<template>
  <li class="list-none p-4 bg-neutral-50">
    <div class="grid grid-cols-2 w-1/2">
      <span>{{ props.updatedAt }}</span>
    </div>
    <div>{{ props.title }}</div>
  </li>
</template>
