import { GetUOM } from "./uom.model"

export type PostUOMConversionMatrix = {
    conversionFactor: number,
    fromUOM: string,
    toUOM: string,   
}

export type GetUOMConversionMatrix = {
    id: string,
    conversionFactor: number,
    fromUOM: GetUOM,
    toUOM: GetUOM,   
}