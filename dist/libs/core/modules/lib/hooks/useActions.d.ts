export declare const useActions: () => {
    setPreview: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "preview/setPreview">;
    setMobileOpen: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setMobileOpen">;
    setIsClosing: import('@reduxjs/toolkit').ActionCreatorWithPayload<boolean, "layout/setIsClosing">;
    setPageTitle: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, "layout/setPageTitle">;
    setShowPassword: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/setShowPassword`>;
    setSigninMethod: import('@reduxjs/toolkit').ActionCreatorWithPayload<"email" | "mobile", `${string}/setSigninMethod`>;
    checkAuth: import('@reduxjs/toolkit').ActionCreatorWithoutPayload<`${string}/checkAuth`>;
    setTokens: import('@reduxjs/toolkit').ActionCreatorWithPayload<import('../../../../../api/auth_api/src/index.ts').TokenRes, `${string}/setTokens`>;
    setLoggedInUserInfo: import('@reduxjs/toolkit').ActionCreatorWithPayload<import('../../../../../api/auth_api/src/index.ts').LoggedInUserInfoRes | null, `${string}/setLoggedInUserInfo`>;
    setDeptId: import('@reduxjs/toolkit').ActionCreatorWithPayload<string, `${string}/setDeptId`>;
};
