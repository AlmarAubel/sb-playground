<template>
  <h1>Example 1</h1>
  <h2>{{ data?.name }}</h2>
</template>

<script lang="ts" setup>
import { getUser } from '@/stories/fakeApi'
import { useQuery } from '@tanstack/vue-query'

const { data } = useQuery({
  queryKey: ['user2'],
  queryFn: getUser,
})
</script>
