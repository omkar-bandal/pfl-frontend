export declare const coreReducer: {
    layout: import('redux').Reducer<{
        mobileOpen: boolean;
        isClosing: boolean;
        pageTitle: string;
    }>;
    preview: import('redux').Reducer<{
        preview: boolean;
    }>;
    notification: import('redux').Reducer<{
        isOpen: boolean;
        severity: "success" | "error";
        message: string;
    }>;
};
