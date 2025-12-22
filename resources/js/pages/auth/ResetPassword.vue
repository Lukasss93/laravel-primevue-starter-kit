<script setup lang="ts">
import InputError from '@/components/InputError.vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Label from '@/components/Label.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import { update } from '@/routes/password';
import { Form, Head } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps<{
    token: string;
    email: string;
}>();

const inputEmail = ref(props.email);
</script>

<template>
    <AuthLayout
        title="Reset password"
        description="Please enter your new password below"
    >
        <Head title="Reset password" />

        <Form
            v-bind="update.form()"
            :transform="(data) => ({ ...data, token, email })"
            :reset-on-success="['password', 'password_confirmation']"
            v-slot="{ errors, processing }"
        >
            <div class="grid gap-6">
                <div class="grid gap-2">
                    <Label for="email">Email</Label>
                    <InputText id="email"
                               type="email"
                               name="email"
                               size="small"
                               v-model="inputEmail"
                               readonly/>
                    <InputError :message="errors.email" class="mt-2" />
                </div>

                <div class="grid gap-2">
                    <Label for="password">Password</Label>
                    <Password inputId="password"
                              name="password"
                              :feedback="false"
                              size="small"
                              fluid
                              required
                              autofocus
                              placeholder="Password"/>
                    <InputError :message="errors.password" />
                </div>

                <div class="grid gap-2">
                    <Label for="password_confirmation">
                        Confirm Password
                    </Label>
                    <Password inputId="password_confirmation"
                              name="password_confirmation"
                              :feedback="false"
                              size="small"
                              fluid
                              required
                              placeholder="Confirm password"/>
                    <InputError :message="errors.password_confirmation" />
                </div>

                <Button type="submit"
                        class="mt-4"
                        label="Reset password"
                        :loading="processing"
                        :disabled="processing"
                        size="small"
                        data-test="reset-password-button"/>
            </div>
        </Form>
    </AuthLayout>
</template>
