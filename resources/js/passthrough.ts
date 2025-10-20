// @ts-nocheck

const passthrough = {
    button: {
        root: ({ props }) => ({
            class: {
                // variant="ghost"
                'p-0!': props.variant === 'ghost',
                'bg-transparent!': props.variant === 'ghost',
                'border-none!': props.variant === 'ghost',
            },
        }),
    },
};

export default passthrough;
