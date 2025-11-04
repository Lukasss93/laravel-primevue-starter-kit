<script setup lang="ts">
import { type LucideIcon, Home } from 'lucide-vue-next';
import { dashboard } from '@/routes';
import { InertiaLinkProps, Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { urlIsActive } from '@/lib/utils';

interface SidebarItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
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
    <ul class="m-0 flex list-none flex-col gap-1">
        <li v-for="(folder, folderIndex) in parsedMenu" :key="folderIndex">
            <div
                v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-slidedown',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-slideup',
                }"
                class="flex cursor-pointer items-center gap-4 rounded-lg border border-transparent p-3 text-surface-0 transition-colors duration-150 hover:border-surface-700 hover:bg-surface-800"
            >
                <span class="text-base leading-tight font-semibold">{{ folder.title }}</span>
                <i class="pi pi-angle-down ml-auto text-base! leading-none! text-surface-400" />
            </div>
            <ul class="m-0 flex list-none flex-col gap-1 overflow-hidden">
                <li v-for="(item, itemIndex) in folder.items" :key="itemIndex">
                    <Link
                        :href="item.href"
                        class="flex cursor-pointer items-center gap-2 rounded-lg border border-transparent px-3 py-2 text-surface-400 transition-colors duration-150 hover:border-surface-700 hover:bg-surface-800 hover:text-surface-0"
                        :class="item.isActive ? 'border-primary bg-primary text-white' : ''"
                    >
                        <component :is="item.icon" class="text-base! leading-none!" />
                        <span class="text-base leading-tight font-medium">{{ item.title }}</span>
                    </Link>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped></style>
