import { IProduct, IProductVariants } from '@prime-fresh/admin_api';

export const initValProductVariant: Omit<IProductVariants, 'id' | 'varientName'> = {
  count: null,
  size: null,
  origin: null,
  variety: null,
  brand: null,
  thresholdStock: null,
};

export const initValProduct: Omit<IProduct, 'id'> = {
  name: null,
  prefix: null,
  // brand: null,
  classification: null,
  category: null,
  subcategory: null,
  description: null,
  // productOrigin: [],
  // variety: [],
  // count: [],
  // size: [],
  variant: [initValProductVariant],
  uom: null,
  packingType: null,
  shelfLife: null,
  storageTemp: null,
  qualityParameters: [{ name: '', type: 'good' }],
  image: null,
};
