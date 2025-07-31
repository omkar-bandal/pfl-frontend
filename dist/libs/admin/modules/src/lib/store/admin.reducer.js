"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminReducer = void 0;
const slices_1 = require("./slices");
exports.adminReducer = {
    approvalFlow: slices_1.approvalFlowReducer,
    customerData: slices_1.customerDataReducer,
    vendorData: slices_1.vendorDataReducer,
    employeeData: slices_1.employeeDataReducer,
    farmerData: slices_1.farmerDataReducer,
    productData: slices_1.productDataReducer,
    officesData: slices_1.officesDataReducer,
    branchesData: slices_1.branchesDataReducer,
    packagingMaterialData: slices_1.packagingMaterialDataReducer
};
//# sourceMappingURL=admin.reducer.js.map