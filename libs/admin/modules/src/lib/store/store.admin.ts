import { configureStore } from '@reduxjs/toolkit';
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
  } from './slices';
  
export const storeAdmin = configureStore({
    reducer: {
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
})

export type RootState = ReturnType<typeof storeAdmin.getState>;

export type AppDispatch = typeof storeAdmin.dispatch;