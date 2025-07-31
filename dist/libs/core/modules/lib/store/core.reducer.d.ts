export declare const coreReducer: {
    auth: import('redux').Reducer<import('../../../../../api/auth_api/src/index.ts').AuthState>;
    layout: import('redux').Reducer<{
        mobileOpen: boolean;
        isSidebarClosing: boolean;
    }>;
    preview: import('redux').Reducer<{
        preview: boolean;
    }>;
    dialogBox: import('redux').Reducer<{
        isDialogBoxOpen: boolean;
    }>;
    drawerContainer: import('redux').Reducer<{
        isDrawerOpen: boolean;
    }>;
    notifications: import('redux').Reducer<import('./slices').NotificationState>;
};
