import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

const theme = definePreset(Aura, {
    semantic: {
        // generated using https://www.tints.dev/
        primary: {
            50: 'oklch(0.96 0.02 21.44)',
            100: 'oklch(0.927 0.037 22.01)',
            200: 'oklch(0.846 0.084 21.7)',
            300: 'oklch(0.774 0.132 23.92)',
            400: 'oklch(0.704 0.188 27.07)',
            500: 'oklch(0.627 0.234 32.36)',
            600: 'oklch(0.568 0.212 32.4)',
            700: 'oklch(0.505 0.189 32.24)',
            800: 'oklch(0.441 0.165 32.37)',
            900: 'oklch(0.388 0.145 32.29)',
            950: 'oklch(0.352 0.131 32.16)'
        },
        colorScheme:{
            light: {
                primary: {
                    color: '{primary.500}',
                    hoverColor: '{primary.600}',
                    contrastColor: '#ffffff',
                },
            },
            dark: {
                primary: {
                    color: '{primary.500}',
                    hoverColor: '{primary.600}',
                    contrastColor: '#ffffff',
                },
            }
        }
    },
});

export default theme;
