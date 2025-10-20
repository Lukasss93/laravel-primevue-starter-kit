<script setup lang="ts">
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { MenuItem } from 'primevue/menuitem';

interface Props {
    breadcrumb?: MenuItem[];
}

withDefaults(defineProps<Props>(), {
    breadcrumb: () => [],
});
</script>

<template>
    <AppLayout :breadcrumb="breadcrumb">
        <slot />
    </AppLayout>
</template>
