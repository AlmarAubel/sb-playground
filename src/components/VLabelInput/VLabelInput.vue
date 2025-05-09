<script lang="ts" setup>
import {computed, useTemplateRef, watch, ref} from 'vue';
import {useElementSize} from '@vueuse/core';

const props = defineProps<{ label: string;}>();

const model = defineModel<string>();
const rootRef = useTemplateRef('root');
const {width} = useElementSize(rootRef);
const max4xl = computed(() => width.value < 500);

</script>

<template>
  <div ref="root">
    max4xl: {{ max4xl }}
    <div
      :class="[
        'tw-flex',
        {
          'tw-flex-row tw-mt-6': max4xl,
          'tw-items-center tw-gap-[1.875rem]': !max4xl,
        },
      ]"
    >
      <div
        :class="[
          {
            'tw-grid tw-gap-[.5625rem]': true,
            'tw-py-3 first:-tw-mt-3 last:-tw-mb-3': max4xl,
            'tw-py-2 first:-tw-mt-2 last:-tw-mb-2': !max4xl,
          },
        ]"
      >
        <div>
          <label for="fooBar" class="tw-font-medium tw-mb-1 md:tw-mb-0 md:tw-mr-4">
            {{ label }}
          </label>
          <input v-model="model" id="fooBar" class="tw-grow-1 tw-border-2"/>
        </div>
      </div>
    </div>
  </div>
</template>
