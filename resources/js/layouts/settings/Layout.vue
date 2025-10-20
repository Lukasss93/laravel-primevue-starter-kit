<script setup lang="ts">
import Heading from '@/components/Heading.vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import { cn, toUrl, urlIsActive } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editPassword } from '@/routes/password';
import { edit as editProfile } from '@/routes/profile';
import { show } from '@/routes/two-factor';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/vue3';
import { RectangleEllipsis, KeyRound, Palette, User } from 'lucide-vue-next';

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
    <div class="px-4 py-6">
        <Heading
            title="Settings"
            description="Manage your profile and account settings"
        />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full max-w-xl lg:w-48">
                <nav class="flex flex-col space-y-1 space-x-0">
                    <Button
                        v-for="item in sidebarNavItems"
                        :key="toUrl(item.href)"
                        :text="!urlIsActive(item.href, currentPath)"
                        fluid
                        v-slot="slotProps"
                        severity="secondary"
                        size="small"
                        asChild
                    >
                        <Link :href="item.href" :class="cn(slotProps.class, 'font-medium justify-start!')">
                            <component :is="item.icon" class="h-4 w-4" />
                            {{ item.title }}
                        </Link>
                    </Button>
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
