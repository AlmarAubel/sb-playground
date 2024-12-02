<template>
  <p>
    {{ petData?.name }}
  </p>
d
  counter: {{count}}
</template>

<script lang="ts" setup>
import { useShowPetById } from '@/api/pets/pets'
import { useCounterStore } from '@/stories/component2/useCounterStore'

const props = defineProps<{ id: string }>()
const { data: petData } = useShowPetById(props.id, {
  query: { select: d => d.data },
})
const { count } = useCounterStore()
</script>
