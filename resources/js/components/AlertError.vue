<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { computed } from 'vue';
import Message from 'primevue/message';

type Props = {
    errors: string[];
    title?: string;
};

const props = withDefaults(defineProps<Props>(), {
    title: 'Something went wrong.',
});

const uniqueErrors = computed(() => Array.from(new Set(props.errors)));
</script>

<template>
    <Message severity="error" variant="outlined" class="w-full">
        <div class="flex items-center gap-2 text-sm">
            <AlertCircle :size="16" />
            <div>{{ title }}</div>
        </div>
        <ul class="list-inside list-disc ml-6 text-sm font-normal text-muted-foreground">
            <li v-for="(error, index) in uniqueErrors" :key="index">
                {{ error }}
            </li>
        </ul>
    </Message>
</template>
