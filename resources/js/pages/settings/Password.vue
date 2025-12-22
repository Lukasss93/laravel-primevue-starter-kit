<script setup lang="ts">
import PasswordController from '@/actions/App/Http/Controllers/Settings/PasswordController';
import InputError from '@/components/InputError.vue';
import AppLayout from '@/layouts/AppLayout.vue';
import SettingsLayout from '@/layouts/SettingsLayout.vue';
import { edit } from '@/routes/user-password';
import { Form, Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import HeadingSmall from '@/components/HeadingSmall.vue';
import Button from 'primevue/button';
import Password from 'primevue/password';
import Label from '@/components/Label.vue';
import { type MenuItem } from 'primevue/menuitem';

const breadcrumbItems: MenuItem[] = [
    {
        label: 'Password settings',
        url: edit().url,
    },
];

const currentPasswordInput = ref('');
const passwordInput = ref('');
const passwordConfirmationInput = ref('');

function reset() {
    currentPasswordInput.value = '';
    passwordInput.value = '';
    passwordConfirmationInput.value = '';
}
</script>

<template>
    <AppLayout :breadcrumb="breadcrumbItems">
        <Head title="Password settings" />

        <SettingsLayout>
            <div class="space-y-6">
                <HeadingSmall
                    title="Update password"
                    description="Ensure your account is using a long, random password to stay secure"
                />

                <Form
                    v-bind="PasswordController.update.form()"
                    :options="{
                        preserveScroll: true,
                    }"
                    :onFinish="reset"
                    class="space-y-6"
                    v-slot="{ errors, processing, recentlySuccessful }"
                >
                    <div class="grid gap-2">
                        <Label for="current_password">Current password</Label>
                        <Password inputId="current_password"
                                  name="current_password"
                                  v-model="currentPasswordInput"
                                  :feedback="false"
                                  size="small"
                                  fluid
                                  placeholder="Current password"/>
                        <InputError :message="errors.current_password" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="password">New password</Label>
                        <Password inputId="password"
                                  name="password"
                                  v-model="passwordInput"
                                  :feedback="false"
                                  size="small"
                                  fluid
                                  placeholder="New password"/>
                        <InputError :message="errors.password" />
                    </div>

                    <div class="grid gap-2">
                        <Label for="password_confirmation"
                            >Confirm password</Label
                        >
                        <Password inputId="password_confirmation"
                                  name="password_confirmation"
                                  v-model="passwordConfirmationInput"
                                  :feedback="false"
                                  size="small"
                                  fluid
                                  placeholder="Confirm password"/>
                        <InputError :message="errors.password_confirmation" />
                    </div>

                    <div class="flex items-center gap-4">
                        <Button
                            type="submit"
                            label="Save password"
                            :loading="processing"
                            :disabled="processing"
                            size="small"
                            data-test="update-password-button"
                        />

                        <Transition
                            enter-active-class="transition ease-in-out"
                            enter-from-class="opacity-0"
                            leave-active-class="transition ease-in-out"
                            leave-to-class="opacity-0"
                        >
                            <p
                                v-show="recentlySuccessful"
                                class="text-sm text-neutral-600"
                            >
                                Saved.
                            </p>
                        </Transition>
                    </div>
                </Form>
            </div>
        </SettingsLayout>
    </AppLayout>
</template>
