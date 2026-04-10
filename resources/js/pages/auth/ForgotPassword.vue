<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Label from '@/components/Label.vue';
import { login } from '@/routes';
import { email } from '@/routes/password';

defineOptions({
    layout: {
        title: 'Forgot password',
        description: 'Enter your email to receive a password reset link',
    },
});

defineProps<{
    status?: string;
}>();
</script>

<template>
    <Head title="Forgot password" />

    <div
        v-if="status"
        class="mb-4 text-center text-sm font-medium text-green-600"
    >
        {{ status }}
    </div>

    <div class="space-y-6">
        <Form v-bind="email.form()" v-slot="{ errors, processing }">
            <div class="grid gap-2">
                <Label for="email">Email address</Label>
                    <InputText
                        id="email"
                        type="email"
                        name="email"
                        size="small"
                        autofocus
                        required
                        placeholder="email@example.com"
                    />
                <InputError :message="errors.email" />
            </div>

                <Button type="submit"
                        class="mt-6"
                        label="Email password reset link"
                        :loading="processing"
                        :disabled="processing"
                        size="small"
                        fluid
                        data-test="email-password-reset-link-button"/>
        </Form>

        <div class="space-x-1 text-center text-sm text-muted-foreground">
            <span>Or, return to</span>
            <TextLink :href="login()">log in</TextLink>
        </div>
    </div>
</template>
