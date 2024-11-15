import { GetProductSubcategory } from './productSubcategory.type';
import { GetProductClassification } from './productClassification.type';
import { GetProductCategory } from './productCategory.type';
import { GetUOM } from '../uoms';

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
    packingType: string;
    shelfLife: string;
    storageTemp: string;
};
export type GetProduct = {
    id: string;
    name: string;
    image: string;
    description: string;
    classification: GetProductClassification;
    category: GetProductCategory;
    subcategory: GetProductSubcategory;
    uom: GetUOM;
    productCode: string;
    productOrigin: string;
    count: string[];
    packingType: string;
    shelfLife: number;
    storageTemp: string;
};
