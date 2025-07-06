import { IProduct } from '@prime-fresh/admin_api';

export const initValProduct: Omit<IProduct, 'id'> = {
  name: null,
  prefix: null,
  brand: null,
  classification: null,
  category: null,
  subcategory: null,
  description: null,
  productOrigin: [],
  variety: [],
  count: [],
  size: [],
  uom: null,
  packingType: null,
  shelfLife: null,
  storageTemp: null,
  qualityParameters: [{ name: '', type: 'good' }],
  image: null,
};
