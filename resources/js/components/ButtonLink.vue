<script setup lang="ts">
import Button from 'primevue/button';
import { Link } from '@inertiajs/vue3';
import { Method } from '@inertiajs/core';
import { cn } from '@/lib/utils';

defineProps<{
    href: string | { url: string; method: Method };
    label?: string;
    size?: 'small' | 'large';
    severity?: 'secondary' | 'success' | 'info' | 'warn' | 'help' | 'danger' | 'contrast';
    variant?: 'link' | 'text' | 'outlined';
    disabled?: boolean;
    buttonClass?: string;
}>();
</script>

<template>
    <Button asChild v-slot="slotProps" :size :severity :variant :disabled>
        <Link :href :class="cn(slotProps.class, 'font-medium', $attrs.class as string)">
            <slot>
                {{ label }}
            </slot>
        </Link>
    </Button>
</template>

<style scoped></style>
