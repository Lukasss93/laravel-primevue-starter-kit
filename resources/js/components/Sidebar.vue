<script setup lang="ts">
import { type LucideIcon, Home } from 'lucide-vue-next';
import { dashboard } from '@/routes';
import type { RouteDefinition } from '@/wayfinder';
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { urlIsActive } from '@/lib/utils';

interface SidebarItem {
    title: string;
    href: string|RouteDefinition<any>;
    icon: LucideIcon;
    isActive?: boolean;
}

interface SidebarFolder {
    title: string;
    items: SidebarItem[];
    isActive?: boolean;
}

const page = usePage();

const menu: SidebarFolder[] = [
    {
        title: 'Home',
        items: [
            {
                title: 'Dashboard',
                href: dashboard(),
                icon: Home,
            },
        ],
    },
];

const parseMenu = (menu: SidebarFolder[]) => {
    for (const [f, folder] of menu.entries()) {
        for (const [i, item] of folder.items.entries()) {
            if (urlIsActive(item.href, page.url)) {
                menu[f].items[i].isActive = true;
                menu[f].isActive = true;
            }
        }
    }
    return menu;
};

const parsedMenu = computed(() => parseMenu(menu));

</script>

<template>
    <ul class="list-none m-0 flex flex-col gap-1">
        <li v-for="(folder, folderIndex) in parsedMenu" :key="folderIndex">
            <div
                v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-slidedown',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-slideup'
                }"
                class="flex items-center cursor-pointer p-3 gap-4 rounded-lg text-surface-0 hover:bg-surface-800 border border-transparent hover:border-surface-700 transition-colors duration-150"
            >
                <span class="font-semibold text-base leading-tight">{{folder.title}}</span>
                <i class="pi pi-angle-down text-base! leading-none! text-surface-400 ml-auto" />
            </div>
            <ul class="list-none m-0 overflow-hidden flex flex-col gap-1">
                <li v-for="(item, itemIndex) in folder.items" :key="itemIndex">
                    <a
                        :href="item.href"
                        class="flex items-center cursor-pointer px-3 py-2 gap-2 rounded-lg text-surface-400 hover:bg-surface-800 border border-transparent hover:border-surface-700 transition-colors duration-150 hover:text-surface-0"
                        :class="item.isActive ? 'bg-primary text-white border-primary' : ''"
                    >
                        <component :is="item.icon" class="text-base! leading-none!" />
                        <span class="font-medium text-base leading-tight">{{item.title}}</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped></style>
