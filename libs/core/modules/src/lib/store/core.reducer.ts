import { layoutReducer, previewReducer } from "./slices";
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
  } from '@prime-fresh/admin_modules';
  
export const coreReducer = {
    layout: layoutReducer,
    preview: previewReducer,
    formContainer: formContainerReducer,
    customerData: customerDataReducer,
    vendorData: vendorDataReducer,
    employeeData: employeeDataReducer,
    farmerData: farmerDataReducer,
    productData: productDataReducer,
    uomData: uomDataReducer,
    officesData: officesDataReducer,
    branchesData: branchesDataReducer,
    alertSnackbar: alertSnackbarReducer,
}