<script setup lang="ts">
import { useTemplateRef } from 'vue';
import { usePage } from '@inertiajs/vue3';
import { ChevronsUpDown } from 'lucide-vue-next';
import { useSidebar } from '@/components/ui/sidebar';
import Button from 'primevue/button';
import UserInfo from '@/components/UserInfo.vue';
import UserMenu from '@/components/UserMenu.vue';

const userMenu = useTemplateRef('userMenu');
const page = usePage();
const user = page.props.auth.user;
const { state } = useSidebar();

function toggleUserMenu(event: Event) {
    userMenu.value?.toggleMenu(event);
}
</script>

<template>
    <UserMenu :user="user" ref="userMenu" />

    <Button text severity="contrast" fluid :class="[state==='collapsed'?'p-0!':'p-2!']" @click="toggleUserMenu">
        <div class="flex items-center gap-2 w-full">
            <UserInfo :user="user" class="flex-1" />
            <ChevronsUpDown class="ml-auto size-4" v-if="state!=='collapsed'" />
        </div>
    </Button>
</template>
