export type PostProduct = {
    name: string;
    image: File | null;
    description: string;
    classification: string;
    category: string;
    subcategory: string;
    uom: string;
    productOrigin: string;
    count: string[];
    size: string[];
    variety: string[];
    brand: string;
    packingType: string;
    shelfLife: number;
    storageTemp: number;
    qualityParameters: {
        name: string;
        type: "good" | "bad";
    }[];
};
export type GetProduct = {
    id: string;
    productCode: string;
    name: string;
    image: File | null;
    description: string;
    classification: string;
    category: string;
    subcategory: string;
    uom: string;
    productOrigin: string;
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
        type: "good" | "bad";
    }[];
};
