<template>
  <Button >Push me!</Button>
  <Button label="Submit" />
  bd
  <p>
    {{ props.id }}
  </p>

</template>

<script lang="ts" setup>

import Button from 'primevue/button';
const props = defineProps<{id:string}>()

</script>
