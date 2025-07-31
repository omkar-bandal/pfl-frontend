export interface IQCParameters {
    id?: string;
    name: string | null;
    type: 'good' | 'bad' | 'average';
}
export type PostProduct = {
    name: string;
    prefix: string;
    image: File | null;
    description: string;
    classification: string;
    category: string;
    subcategory: string;
    uom: string;
    productOrigin: string[];
    count: string[];
    size: string[];
    variety: string[];
    brand: string;
    packingType: string;
    shelfLife: number;
    storageTemp: number;
    qualityParameters: {
        name: string;
        type: 'good' | 'bad';
    }[];
};
export type GetProduct = {
    id: string;
    productCode: string;
    name: string;
    prefix: string;
    image: File | null;
    description: string;
    classification: string;
    category: string;
    subcategory: string;
    uom: string;
    productOrigin: string[];
    count: string[];
    size: string[];
    variety: string[];
    brand: string;
    packingType: string;
    shelfLife: number;
    storageTemp: number;
    qualityParameters: {
        id: string;
        name: string;
        type: 'good' | 'bad';
    }[];
};
export interface IProduct {
    id: string;
    productCode?: string;
    name: string | null;
    prefix: string | null;
    image: File | null;
    description: string | null;
    classification: string | null;
    category: string | null;
    subcategory: string | null;
    uom: string | null;
    productOrigin: string[];
    count: string[];
    size: string[];
    variety: string[];
    brand: string | null;
    packingType: string | null;
    shelfLife: number | null;
    storageTemp: number | null;
    qualityParameters: IQCParameters[];
}
