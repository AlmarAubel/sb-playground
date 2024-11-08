<template>

  <p>
    {{ petData?.name }}
  </p>

</template>

<script lang="ts" setup>
import { useShowPetById } from '@/api/pets/pets'
const props = defineProps<{id:string}>()
const { data: petData } = useShowPetById(props.id, {
  query: { select: d => d.data },

})
</script>
