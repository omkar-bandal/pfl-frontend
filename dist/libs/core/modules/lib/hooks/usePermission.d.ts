export declare const usePermission: (documentUniqueKey: string) => {
    canCreate: boolean;
    canView: boolean;
    canEdit: boolean;
    canDelete: boolean;
    canDownload: boolean;
    checkPermission: (action: any) => boolean;
};
