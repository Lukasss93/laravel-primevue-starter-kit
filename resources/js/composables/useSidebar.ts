import { onMounted, onUnmounted, ref, watch } from 'vue';

interface SidebarOptions {
    selector: string;
    toggleSelector: string;
}

export function useSidebar(options: SidebarOptions) {
    const isMobile = ref(false);
    const isOpen = ref(false);

    const onResize = () => {
        isMobile.value = window.innerWidth < 1024; //64rem
        isOpen.value = false;
    };

    const toggleSidebar = () => {
        if(!isMobile.value) {
            return;
        }

        isOpen.value = !isOpen.value;
    };

    const onClickOutside = (event: MouseEvent) => {
        const toggleButton = document.querySelector(options.toggleSelector);

        if (isMobile.value && isOpen.value && !toggleButton?.contains(event.target as Node)) {
            isOpen.value = false;
        }
    };

    onMounted(() => {
        document.querySelector(options.toggleSelector)?.addEventListener('click', toggleSidebar);
        document.addEventListener('click', onClickOutside);
        window.addEventListener('resize', onResize);
        onResize();
    });

    onUnmounted(() => {
        document.querySelector(options.toggleSelector)?.removeEventListener('click', toggleSidebar);
        document.removeEventListener('click', onClickOutside);
        window.removeEventListener('resize', onResize);
    });

    watch(isOpen, (value) => {
        const sidebar = document.querySelector(options.selector);

        //toggle hidden class
        sidebar?.classList.toggle('hidden', !value);
    });
}
