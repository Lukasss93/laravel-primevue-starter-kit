<script setup lang="ts">
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { MenuItem } from 'primevue/menuitem';

const {
    breadcrumb = [],
} = defineProps<{
    breadcrumb: MenuItem[];
}>();
</script>

<template>
    <AppLayout :breadcrumb="breadcrumb">
        <slot />
    </AppLayout>
</template>
