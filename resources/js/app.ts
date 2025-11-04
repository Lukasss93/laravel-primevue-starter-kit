import '../css/app.css';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { initializeTheme } from './composables/useAppearance';
import PrimeVue from 'primevue/config';
import PrimeVuePreset from './preset';
import PrimeVuePassThrough from './passthrough';
import StyleClass from 'primevue/styleclass';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: PrimeVuePreset,
                    options: {
                        darkModeSelector: '.dark'
                    }
                },
                pt: PrimeVuePassThrough,
            })
            .directive('styleclass', StyleClass)
            .mount(el);
    },
    progress: {
        color: '#F53003',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
