export interface IQCParameters {
  id?: string;
  name: string | null;
  type: 'good' | 'bad' | 'average' | null;
}

export interface IProductVariants {
  id?: string;
  createdAt?: string;
  variantCode?: string | null,
  variantName?: string | null;
  count: string | null;
  size: string | null;
  variety: string | null;
  origin: string | null;
  brand: string | null;
  thresholdStock: number | null;
}

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
  variant: IProductVariants[];
  packingType: string | null;
  shelfLife: number | null;
  storageTemp: number | null;
  qualityParameters: IQCParameters[];
}

export interface IProductPartialData {
    id: string;
    name: string;
    description: string | null;
    productCode: string | null;
}

