export declare const useActions: () => {
    openDrawer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"drawerContainer/openDrawer">;
    closeDrawer: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"drawerContainer/closeDrawer">;
    addNotification: import('@reduxjs/toolkit').ActionCreatorWithPayload<import('../models').INotification, "notifications/addNotification">;
    clearNotifications: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"notifications/clearNotifications">;
    setNotifications: import('@reduxjs/toolkit').ActionCreatorWithPayload<import('../models').INotification[], "notifications/setNotifications">;
    openDialogBox: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"dialogBox/openDialogBox">;
    closeDialogBox: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<"dialogBox/closeDialogBox">;
    setPreview: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "preview/setPreview">;
    setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">;
    setIsSidebarClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsSidebarClosing">;
    setIsLoggedIn: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, `${string}/setIsLoggedIn`>;
    checkAuth: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/checkAuth`>;
    setLoggedInUserInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<import('../../../../../api/auth_api/src/index.ts').ILoggedInUserInfoRes | null, `${string}/setLoggedInUserInfo`>;
    setEmployeePermissions: import('@reduxjs/toolkit').ActionCreatorWithPayload<import('../../../../../api/auth_api/src/index.ts').IEmployeePermissions[] | null, `${string}/setEmployeePermissions`>;
    openForgetPasswordDialog: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/openForgetPasswordDialog`>;
    closeForgetPasswordDialog: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/closeForgetPasswordDialog`>;
};
