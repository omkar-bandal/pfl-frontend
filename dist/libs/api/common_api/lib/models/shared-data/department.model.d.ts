export type Level = {
    name: string | null;
    hierarchy: number | null;
    department: string | null;
    permissions: {
        documentDefinition: string | null;
        canCreate: boolean;
        canView: boolean;
        canEdit: boolean;
        canDelete: boolean;
        canDownload: boolean;
    }[];
};
export type DocumentDetails = {
    uniqueKey: string;
    name: string;
    documentType: string;
};
export type GetLevel = {
    id: string;
} & Level;
export type GetDocumentDetails = {
    id: string;
} & DocumentDetails;
export type Department = {
    name: string;
};
export type GetDepartment = {
    id: string;
    name: string;
    levels: GetLevel[];
};
