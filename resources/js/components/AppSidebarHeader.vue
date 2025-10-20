<script setup lang="ts">
import Breadcrumb from '@/components/Breadcrumb.vue';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { MenuItem } from 'primevue/menuitem';

withDefaults(
    defineProps<{
        breadcrumb?: MenuItem[];
    }>(),
    {
        breadcrumb: () => [],
    },
);
</script>

<template>
    <header
        class="flex h-16 shrink-0 items-center gap-2 border-b border-sidebar-border/70 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4"
    >
        <div class="flex items-center gap-2">
            <SidebarTrigger class="-ml-1" />
            <template v-if="breadcrumb && breadcrumb.length > 0">
                <Breadcrumb :items="breadcrumb" />
            </template>
        </div>
    </header>
</template>
