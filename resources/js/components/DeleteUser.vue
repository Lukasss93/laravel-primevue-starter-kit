<script setup lang="ts">
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import { useForm } from '@inertiajs/vue3';
import { ref, useTemplateRef } from 'vue';
import HeadingSmall from '@/components/HeadingSmall.vue';
import InputError from '@/components/InputError.vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Password from 'primevue/password';
import Label from '@/components/Label.vue';
import Message from 'primevue/message';

const dialogVisible = ref(false);
const passwordInput = useTemplateRef<HTMLInputElement | null>('passwordInput');

const form = useForm({
    password: '',
});

function openDialog() {
    dialogVisible.value = true;
}

function closeDialog() {
    dialogVisible.value = false;
    form.clearErrors();
    form.reset();
}

function confirm() {
    form.submit(ProfileController.destroy(), {
        preserveScroll: true,
        onSuccess: () => closeDialog(),
        onError: () => passwordInput.value?.focus(),
        onFinish: () => form.reset(),
    });
}
</script>

<template>
    <Dialog
        v-model:visible="dialogVisible"
        modal
        :style="{ width: '35rem' }"
        header="Are you sure you want to delete your account?"
    >
        <div class="mb-4 text-muted-foreground">
            Once your account is deleted, all of its resources and data will
            also be permanently deleted. Please enter your password to confirm
            you would like to permanently delete your account.
        </div>

        <div class="grid gap-2">
            <Label for="password" class="sr-only">Password</Label>
            <Password
                inputId="password"
                ref="passwordInput"
                :feedback="false"
                size="small"
                autofocus
                fluid
                v-model="form.password"
                placeholder="Password"
            />
            <InputError :message="form.errors.password" />
        </div>

        <template #footer>
            <Button
                label="Cancel"
                severity="secondary"
                size="small"
                text
                @click="closeDialog"
            />
            <Button
                label="Delete account"
                @click="confirm"
                severity="danger"
                size="small"
                :loading="form.processing"
                :disabled="form.processing"
                data-test="confirm-delete-user-button"
            />
        </template>
    </Dialog>

    <div class="space-y-6">
        <HeadingSmall
            title="Delete account"
            description="Delete your account and all of its resources"
        />

        <Message severity="error">
            <p class="font-medium">Warning</p>
            <p class="text-sm">
                Please proceed with caution, this cannot be undone.
            </p>
            <Button
                label="Delete account"
                @click="openDialog"
                size="small"
                severity="danger"
                class="mt-4"
                data-test="delete-user-button"
            />
        </Message>
    </div>
</template>
