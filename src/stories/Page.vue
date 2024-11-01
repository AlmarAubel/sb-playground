<template>
  <h1>Example 1</h1>
  <h2>{{ data?.name }}</h2>
  {{ companyData?.name}}
</template>

<script lang="ts" setup>
import { getCompany, getUser } from '@/stories/fakeApi'
import { useQuery } from '@tanstack/vue-query'

const { data } = useQuery({
  queryKey: ['user'],
  queryFn: getUser,
})

const { data:companyData } = useQuery({
  queryKey: ['company'],
  queryFn: getCompany,
})
</script>
