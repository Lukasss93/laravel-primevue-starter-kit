<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import Divider from 'primevue/divider';
import { urlIsActive } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editPassword } from '@/routes/password';
import { edit as editProfile } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { type NavItem } from '@/types';
import { KeyRound, Palette, RectangleEllipsis, User } from 'lucide-vue-next';
import ButtonLink from '@/components/ButtonLink.vue';

const sidebarNavItems: NavItem[] = [
    {
        title: 'Profile',
        href: editProfile(),
        icon: User,
    },
    {
        title: 'Password',
        href: editPassword(),
        icon: KeyRound,
    },
    {
        title: 'Two-Factor Auth',
        href: show(),
        icon: RectangleEllipsis,
    },
    {
        title: 'Appearance',
        href: editAppearance(),
        icon: Palette,
    },
];

const currentPath = typeof window !== undefined ? window.location.pathname : '';
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
                        v-for="(item, i) in sidebarNavItems"
                        :key="i"
                        :href="item.href"
                        size="small"
                        :variant="!urlIsActive(item.href, currentPath)?'text':undefined"
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
