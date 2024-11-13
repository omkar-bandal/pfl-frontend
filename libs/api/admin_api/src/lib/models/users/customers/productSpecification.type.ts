export type PostProductSpecification = {
    articleName: string,
    specifications: string,
    parameters: string,
    packingMaterialSpec: string,
    rejectionCriteria: string,
    comment: string
}

export type GetProductSpecification = {
    id: string,
    articleName: string,
    specifications: string,
    parameters: string,
    packingMaterialSpec: string,
    rejectionCriteria: string,
    comment: string
}