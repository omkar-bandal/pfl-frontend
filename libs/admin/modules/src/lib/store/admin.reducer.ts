import { 
    formContainerReducer, 
    customerDataReducer, 
    employeeDataReducer, 
    farmerDataReducer, 
    productDataReducer, 
    uomDataReducer, 
    officesDataReducer, 
    branchesDataReducer,
    vendorDataReducer,
    alertSnackbarReducer,
    vendorCategoryDataReducer,
  } from './slices';
  
export const adminReducer = {
    formContainer: formContainerReducer,
    customerData: customerDataReducer,
    vendorData: vendorDataReducer,
    vendorCategoryData: vendorCategoryDataReducer,
    employeeData: employeeDataReducer,
    farmerData: farmerDataReducer,
    productData: productDataReducer,
    uomData: uomDataReducer,
    officesData: officesDataReducer,
    branchesData: branchesDataReducer,
    alertSnackbar: alertSnackbarReducer,
}