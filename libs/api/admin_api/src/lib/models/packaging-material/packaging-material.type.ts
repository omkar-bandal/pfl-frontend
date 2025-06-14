export type PostPackagingMaterial = {
    useFor: 'for purchase' | 'for sale',
    packagingMaterialName: string | null,
    packagingMaterialWeight: number,
    packagingMaterialDescription: string | null,
    containsQuantity: number,
    uom: string | null,
}

export type GetPackagingMaterial = {id: string} & PostPackagingMaterial;