"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeAdmin = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const slices_1 = require("./slices");
exports.storeAdmin = (0, toolkit_1.configureStore)({
    reducer: {
        formContainer: slices_1.formContainerReducer,
        customerData: slices_1.customerDataReducer,
        vendorData: slices_1.vendorDataReducer,
        employeeData: slices_1.employeeDataReducer,
        farmerData: slices_1.farmerDataReducer,
        productData: slices_1.productDataReducer,
        uomData: slices_1.uomDataReducer,
        officesData: slices_1.officesDataReducer,
        branchesData: slices_1.branchesDataReducer,
        alertSnackbar: slices_1.alertSnackbarReducer,
    }
});
//# sourceMappingURL=store.admin.js.map