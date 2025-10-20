<script setup lang="ts">
import AppLogoIcon from '@/components/AppLogoIcon.vue';
import Card from 'primevue/card';
import { home } from '@/routes';
import { Link } from '@inertiajs/vue3';

defineProps<{
    title?: string;
    description?: string;
}>();
</script>

<template>
    <div
        class="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
        <div class="flex w-full max-w-md flex-col gap-6">
            <Link
                :href="home()"
                class="flex items-center gap-2 self-center font-medium"
            >
                <div class="flex h-9 w-9 items-center justify-center">
                    <AppLogoIcon
                        class="size-9 fill-current text-black dark:text-white"
                    />
                </div>
            </Link>

            <div class="flex flex-col gap-6">
                <Card class="rounded-xl">
                    <template #title>
                        <div class="text-center">
                            {{ title }}
                        </div>
                    </template>
                    <template #subtitle>
                        <div class="text-center">
                            {{ description }}
                        </div>
                    </template>
                    <template #content>
                        <div class="mt-4">
                            <slot />
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>
