import {
  customerDataReducer,
  employeeDataReducer,
  farmerDataReducer,
  productDataReducer,
  officesDataReducer,
  branchesDataReducer,
  vendorDataReducer,
  packagingMaterialDataReducer,
} from './slices';

export const adminReducer = {
  customerData: customerDataReducer,
  vendorData: vendorDataReducer,
  employeeData: employeeDataReducer,
  farmerData: farmerDataReducer,
  productData: productDataReducer,
  officesData: officesDataReducer,
  branchesData: branchesDataReducer,
  packagingMaterialData: packagingMaterialDataReducer
};
