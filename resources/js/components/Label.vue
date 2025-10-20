<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
    label?: string;
    for?: string;
    class?: HTMLAttributes["class"]
}>();
</script>

<template>
    <label :for="props.for" :class="cn('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', props.class)">
        <slot>{{ label }}</slot>
    </label>
</template>

<style scoped></style>
