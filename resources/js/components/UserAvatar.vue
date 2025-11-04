<script setup lang="ts">
import type { User } from '@/types';
import Avatar from 'primevue/avatar';
import { computed } from 'vue';
import { useInitials } from '@/composables/useInitials';

const {
    user,
    size = 8,
} = defineProps<{
    user: User;
    size?: number;
}>();

const { getInitials } = useInitials();

const hasAvatar = computed(() => user.avatar && user.avatar !== '');
</script>

<template>
    <Avatar
        v-if="hasAvatar"
        :class="$attrs.class"
        :alt="user.name"
        :image="user.avatar"
        shape="circle"
        :style="{
            width: size * 0.25 + 'rem',
            height: size * 0.25 + 'rem',
        }"
    />
    <Avatar
        v-else
        :class="$attrs.class"
        shape="circle"
        :label="getInitials(user.name)"
        :pt:label:style="{ fontSize: size * 0.11 + 'rem !important', fontWeight: 'bold', lineHeight: 'normal' }"
        :style="{
            width: size * 0.25 + 'rem',
            height: size * 0.25 + 'rem',
        }"
    />
</template>

<style scoped></style>
