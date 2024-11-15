import { GetUOM } from './uom.type';

export type PostUOMConversionMatrix = {
    conversionFactor: number;
    fromUOM: string;
    toUOM: string;
};
export type GetUOMConversionMatrix = {
    id: string;
    conversionFactor: number;
    fromUOM: GetUOM;
    toUOM: GetUOM;
};
