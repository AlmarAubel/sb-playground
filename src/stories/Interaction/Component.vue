<template>
<div>
  <p>
    <button>Klik hier</button>
    <label for="input">Naam</label>
    <input type="text" id="input" />
  </p>
  <div> <button>Klik dan hier</button></div>

  <button style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
    Click me
  </button>
</div>
</template>

<script lang="ts" setup>
import { useShowPetById } from '@/api/pets/pets'
const props = defineProps<{id:string}>()
const { data: petData } = useShowPetById(props.id, {
  query: { select: d => d.data },

})
</script>
