"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminReducer = void 0;
const slices_1 = require("./slices");
exports.adminReducer = {
    formContainer: slices_1.formContainerReducer,
    customerData: slices_1.customerDataReducer,
    vendorData: slices_1.vendorDataReducer,
    vendorCategoryData: slices_1.vendorCategoryDataReducer,
    employeeData: slices_1.employeeDataReducer,
    farmerData: slices_1.farmerDataReducer,
    productData: slices_1.productDataReducer,
    uomData: slices_1.uomDataReducer,
    officesData: slices_1.officesDataReducer,
    branchesData: slices_1.branchesDataReducer,
    alertSnackbar: slices_1.alertSnackbarReducer,
};
//# sourceMappingURL=admin.reducer.js.map