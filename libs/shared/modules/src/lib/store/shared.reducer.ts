import {
  customerDataReducer,
  farmerDataReducer,
  productDataReducer,
  vendorDataReducer,
} from './slices';

export const sharedReducer = {
  customerData: customerDataReducer,
  vendorData: vendorDataReducer,
  farmerData: farmerDataReducer,
  productData: productDataReducer,
};
