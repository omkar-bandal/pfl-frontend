export declare const coreReducer: {
    auth: import('redux').Reducer<import('../../../../../api/auth_api/src/index.ts').AuthState>;
    layout: import('redux').Reducer<{
        mobileOpen: boolean;
        isClosing: boolean;
        pageTitle: string;
    }>;
    preview: import('redux').Reducer<{
        preview: boolean;
    }>;
};
