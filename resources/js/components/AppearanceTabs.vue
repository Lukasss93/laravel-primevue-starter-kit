<script setup lang="ts">
import { Monitor, Moon, Sun } from 'lucide-vue-next';
import { useAppearance } from '@/composables/useAppearance';
import SelectButton from 'primevue/selectbutton';

const { appearance, updateAppearance } = useAppearance();

const tabs = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'dark', icon: Moon, label: 'Dark' },
    { value: 'system', icon: Monitor, label: 'System' },
];
</script>

<template>
    <div>
        <SelectButton
            :defaultValue="appearance"
            @change="e => updateAppearance(e.value)"
            :allowEmpty="false"
            :options="tabs"
            optionLabel="label"
            optionValue="value"
            pt:pcToggleButton:root:class="bg-surface-100! dark:bg-surface-900! border-surface-100! dark:border-surface-900! text-sm!"
            pt:pcToggleButton:content:class="rounded!"
        >
            <template #option="slotProps">
                <component :is="slotProps.option.icon" :size="18"/> {{slotProps.option.label}}
            </template>
        </SelectButton>
    </div>
</template>
