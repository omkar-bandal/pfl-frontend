export interface ICustomerProductSpecs {
    id?: string;
    articleName: string | null;
    specifications: string | null;
    parameters: string | null;
    packingMaterialSpec: string | null;
    rejectionCriteria: string | null;
    comment: string | null
}