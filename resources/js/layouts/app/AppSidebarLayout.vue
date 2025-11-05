<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import type { MenuItem } from 'primevue/menuitem';
import Breadcrumb from '@/components/Breadcrumb.vue';
import UserMenu from '@/components/UserMenu.vue';
import { useSidebar } from '@/composables/useSidebar';
import Sidebar from '@/components/Sidebar.vue';

const {
    breadcrumb = [],
    fullHeight = false,
} = defineProps<{
    breadcrumb: MenuItem[];
    fullHeight?: boolean;
}>();

useSidebar({
    selector: '#layout-sidebar-menu',
    toggleSelector: '#layout-sidebar-toggle',
});

</script>

<template>
    <div id="layout-sidebar-container" class="min-h-screen flex relative lg:static bg-surface-50 dark:bg-surface-950">
        <div id="layout-sidebar-menu" class="bg-surface-900 h-screen hidden lg:block shrink-0 absolute lg:static left-0 top-0 z-10 border-r border-surface-800 select-none">
            <div class="flex flex-col h-full">
                <div class="p-4 flex items-center gap-4">
                    <AppLogo />
                </div>
                <div class="overflow-y-auto flex-1 p-2 flex flex-col gap-4">
                    <Sidebar/>
                </div>
            </div>
        </div>

        <div class="min-h-screen flex flex-col relative flex-auto">
            <!-- TOPBAR -->
            <div id="layout-sidebar-topbar" class="flex justify-between items-center py-2 px-4 bg-surface-100 dark:bg-surface-900 border-b border-surface-200 dark:border-surface-800 relative lg:static">
                <div class="flex items-center gap-4">
                    <!-- SIDEBAR TOGGLE BUTTON - MOBILE -->
                    <a
                        id="layout-sidebar-toggle"
                        class="cursor-pointer flex items-center justify-center lg:hidden text-surface-700 dark:text-surface-100"
                    >
                        <i class="pi pi-bars text-xl!" />
                    </a>

                    <!-- BREADCRUMB -->
                    <Breadcrumb :items="breadcrumb" />
                </div>

                <!-- USER ACTIONS -->
                <div class="flex items-center gap-8">
                    <UserMenu/>
                </div>
            </div>

            <!-- CONTENT -->
            <div id="layout-sidebar-content" class="flex flex-col flex-auto">
                <div :class="['p-4', {'h-full': fullHeight }]">
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>

<style>
:root {
    --topbar-height: 50px;
    --sidebar-width: 260px;
}

#layout-sidebar-menu{
    position: fixed;
    width: var(--sidebar-width);
}

#layout-sidebar-topbar{
    position: fixed;
    width: calc(100vw - var(--sidebar-width));
    margin-left: var(--sidebar-width);
    height: var(--topbar-height);
    z-index: 1;
}

#layout-sidebar-content{
    padding-top: var(--topbar-height);
    padding-left: var(--sidebar-width);
}

@media (width < 64rem) {
    #layout-sidebar-topbar {
        width: 100vw;
        margin-left: 0;
    }

    #layout-sidebar-content{
        padding-left: 0;
    }
}
</style>
