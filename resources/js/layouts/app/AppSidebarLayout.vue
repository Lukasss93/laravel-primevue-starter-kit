<script setup lang="ts">
import AppContent from '@/components/AppContent.vue';
import AppShell from '@/components/AppShell.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import AppSidebarHeader from '@/components/AppSidebarHeader.vue';
import { MenuItem } from 'primevue/menuitem';

interface Props {
    breadcrumb?: MenuItem[];
}

withDefaults(defineProps<Props>(), {
    breadcrumb: () => [],
});
</script>

<template>
    <AppShell variant="sidebar">
        <AppSidebar />
        <AppContent variant="sidebar" class="overflow-x-hidden">
            <AppSidebarHeader :breadcrumb="breadcrumb" />
            <slot />
        </AppContent>
    </AppShell>
</template>
