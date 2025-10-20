<script setup lang="ts">
import PrimeBreadcrumb from 'primevue/breadcrumb';
import { MenuItem } from 'primevue/menuitem';
import { Link } from '@inertiajs/vue3';

defineProps<{
    items: MenuItem[];
}>();
</script>

<template>
    <PrimeBreadcrumb :model="items" class="p-0! bg-transparent!">
        <template #item="{item}">
            <div v-if="item.disabled" class="flex items-center">
                <i :class="item.icon" />
                <div class="whitespace-nowrap">{{item.label}}</div>
            </div>
            <Link v-else :href="item.url" class="flex items-center">
                <i v-if="item.icon" :class="item.icon" class="mr-2" />
                <div class="whitespace-nowrap">{{item.label}}</div>
            </Link>
        </template>
    </PrimeBreadcrumb>
</template>
