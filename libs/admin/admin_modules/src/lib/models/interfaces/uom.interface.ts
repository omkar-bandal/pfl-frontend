export interface UOM {
    id?: string,
    unit: string,
    abbreviation: string,
    description: string,
}
export interface UOMPost {
    unit: string,
    abbreviation: string,
    description: string,
}
export interface UOMRes {
    status: string,
    data: UOM,
}
export interface UOMConversionMatrix{
    id: string,      
    conversionFactor: number,
    fromUOM: UOM,
    toUOM: UOM,   
}
export interface UOMConversionMatrixRes{
    status: string,
    data: UOMConversionMatrix,   
}
