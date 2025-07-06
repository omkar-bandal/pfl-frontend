import {
  customerDataReducer,
  employeeDataReducer,
  farmerDataReducer,
  productDataReducer,
  officesDataReducer,
  branchesDataReducer,
  vendorDataReducer,
  packagingMaterialDataReducer,
  approvalFlowReducer,
} from './slices';

export const adminReducer = {
  approvalFlow: approvalFlowReducer,
  customerData: customerDataReducer,
  vendorData: vendorDataReducer,
  employeeData: employeeDataReducer,
  farmerData: farmerDataReducer,
  productData: productDataReducer,
  officesData: officesDataReducer,
  branchesData: branchesDataReducer,
  packagingMaterialData: packagingMaterialDataReducer
};
