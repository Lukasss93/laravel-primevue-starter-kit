<script setup lang="ts">
import { Form, Head } from '@inertiajs/vue3';
import InputError from '@/components/InputError.vue';
import TextLink from '@/components/TextLink.vue';
import Button from 'primevue/button';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Label from '@/components/Label.vue';
import { login } from '@/routes';
import { store } from '@/routes/register';

defineOptions({
    layout: {
        title: 'Create an account',
        description: 'Enter your details below to create your account',
    },
});
</script>

<template>
    <Head title="Register" />

    <Form
        v-bind="store.form()"
        :reset-on-success="['password', 'password_confirmation']"
        v-slot="{ errors, processing }"
        class="flex flex-col gap-6"
    >
        <div class="grid gap-6">
            <div class="grid gap-2">
                <Label for="name">Name</Label>
                <InputText
                    id="name"
                    type="text"
                    name="name"
                    size="small"
                    :tabindex="1"
                    autofocus
                    required
                    placeholder="Full name"
                />
                <InputError :message="errors.name" />
            </div>

            <div class="grid gap-2">
                <Label for="email">Email address</Label>
                <InputText
                    id="email"
                    type="email"
                    name="email"
                    size="small"
                    :tabindex="2"
                    autofocus
                    required
                    placeholder="email@example.com"
                />
                <InputError :message="errors.email" />
            </div>

            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Password
                    inputId="password"
                    name="password"
                    :feedback="false"
                    size="small"
                    fluid
                    required
                    :pt="{pcInputText:{root:{tabindex:3}}}"
                    placeholder="Password"
                />
                <InputError :message="errors.password" />
            </div>

            <div class="grid gap-2">
                <Label for="password_confirmation">Confirm password</Label>
                    <Password
                        inputId="password_confirmation"
                        name="password_confirmation"
                        :feedback="false"
                        size="small"
                        fluid
                        required
                        :pt="{pcInputText:{root:{tabindex:4}}}"
                        placeholder="Confirm password"
                    />
                <InputError :message="errors.password_confirmation" />
            </div>

            <Button
                type="submit"
                class="mt-2"
                fluid
                tabindex="5"
                label="Create account"
                :loading="processing"
                :disabled="processing"
                size="small"
                data-test="register-user-button"
            />
        </div>

        <div class="text-center text-sm text-muted-foreground">
            Already have an account?
            <TextLink
                :href="login()"
                class="underline underline-offset-4"
                :tabindex="6"
                >Log in</TextLink
            >
        </div>
    </Form>
</template>
