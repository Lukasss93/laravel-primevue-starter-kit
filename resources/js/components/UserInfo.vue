<script setup lang="ts">
import Avatar from 'primevue/avatar';
import { useInitials } from '@/composables/useInitials';
import type { User } from '@/types';
import { computed } from 'vue';

interface Props {
    user: User;
    showEmail?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    showEmail: false,
});

const { getInitials } = useInitials();

// Compute whether we should show the avatar image
const showAvatar = computed(
    () => props.user.avatar && props.user.avatar !== '',
);
</script>

<template>
    <div class="flex items-center gap-2">
        <Avatar v-if="showAvatar"
                :image="user.avatar"
                :alt="user.name"
                class="size-8 overflow-hidden"/>
        <Avatar v-else
                :label="getInitials(user.name)"
                class="size-8 overflow-hidden"/>

        <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-medium">{{ user.name }}</span>
            <span v-if="showEmail" class="truncate text-xs text-muted-foreground">{{
                user.email
            }}</span>
        </div>
    </div>
</template>
