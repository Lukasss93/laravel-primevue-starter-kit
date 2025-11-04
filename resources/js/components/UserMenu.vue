<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { LogOut, Settings } from 'lucide-vue-next';
import { Link, router, usePage } from '@inertiajs/vue3';
import UserInfo from '@/components/UserInfo.vue';
import Menu from 'primevue/menu';
import type { MenuItem } from 'primevue/menuitem';
import { edit } from '@/routes/profile';
import { logout } from '@/routes';
import UserAvatar from '@/components/UserAvatar.vue';
import Button from 'primevue/button';

const page = usePage();
const user = page.props.auth.user;
const userMenu = useTemplateRef('userMenu');
const toggleMenu = (event: Event) => userMenu.value?.toggle(event);

const menuItems: MenuItem[] = [
    {
        separator: true,
    },
    {
        label: 'Settings',
        lucideIcon: Settings,
        urlPair: edit(),
    },
    {
        label: 'Log out',
        lucideIcon: LogOut,
        urlPair: logout(),
        command: () => router.flushAll(),
    },
];

defineExpose({ toggleMenu });
</script>

<template>
    <Menu ref="userMenu" :model="menuItems" popup>
        <template #start>
            <div class="px-2 pt-2 pb-1">
                <UserInfo :user="user" :show-email="true" />
            </div>
        </template>
        <template #item="{ item }">
            <Link
                class="flex w-full cursor-pointer items-center gap-2 px-1 py-1.5 text-left text-sm"
                as="button"
                :href="item.urlPair"
            >
                <component :is="item.lucideIcon" class="mx-1 h-4 w-4" />
                {{ item.label }}
            </Link>
        </template>
    </Menu>

    <Button variant="ghost"
            class="rounded-full"
            @click="toggleMenu">
        <UserAvatar :user class="cursor-pointer"/>
    </Button>
</template>

<style scoped></style>
