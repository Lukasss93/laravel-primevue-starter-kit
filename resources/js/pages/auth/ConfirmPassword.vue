<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Label from '@/components/Label.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { store } from '@/routes/password/confirm';

defineOptions({
    layout: {
        title: 'Confirm your password',
        description:
            'This is a secure area of the application. Please confirm your password before continuing.',
    },
});
</script>

<template>
    <Head title="Confirm password" />

    <Form
        v-bind="store.form()"
        reset-on-success
        v-slot="{ errors, processing }"
    >
        <div class="space-y-6">
            <div class="grid gap-2">
                <Label htmlFor="password">Password</Label>
                    <Password inputId="password"
                              name="password"
                              :feedback="false"
                              size="small"
                              fluid
                              required
                              autofocus
                              placeholder="Your password"/>

                <InputError :message="errors.password" />
            </div>

                <Button type="submit"
                        label="Confirm Password"
                        :loading="processing"
                        :disabled="processing"
                        size="small"
                        fluid
                        data-test="confirm-password-button"/>
            </div>
        </Form>
</template>
