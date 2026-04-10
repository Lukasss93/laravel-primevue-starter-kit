<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Heading from '@/components/Heading.vue';
import ButtonLink from '@/components/ButtonLink.vue';
import Divider from 'primevue/divider';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { toUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import { type NavItem } from '@/types';
import { KeyRound, Palette, User } from 'lucide-vue-next';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: editProfile(),
        icon: User,
    },
    {
        title: 'Security',
        href: editSecurity(),
        icon: KeyRound,
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: Palette,
    },
];

const { isCurrentOrParentUrl } = useCurrentUrl();
</script>

<template>
    <div>
        <Heading
            title="Settings"
            description="Manage your profile and account settings"
        />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full max-w-xl lg:w-48">
                <nav class="flex flex-col space-y-1 space-x-0">
                    <ButtonLink
                        v-for="item in sidebarNavItems"
                        :key="toUrl(item.href)"
                        :href="item.href"
                        size="small"
                        :variant="!isCurrentOrParentUrl(item.href)?'text':undefined"
                        severity="secondary"
                    >
                        <div class="flex w-full items-center flex-row gap-2">
                            <component :is="item.icon" class="h-4 w-4" />
                            <div>{{ item.title }}</div>
                        </div>
                    </ButtonLink>
                </nav>
            </aside>

            <Divider class="lg:hidden!" />

            <div class="flex-1 md:max-w-2xl">
                <section class="max-w-xl space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
