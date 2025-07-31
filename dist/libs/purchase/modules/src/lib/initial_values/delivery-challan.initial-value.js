"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dcTypeStockTransferInitialValue = exports.dcTypeCustomerInitialValue = exports.dcBaseInitialValue = exports.dcProductsInitialValues = void 0;
exports.dcProductsInitialValues = {
    productName: null,
    count: null,
    size: null,
    origin: null,
    variety: null,
    uom: null,
    packagingMaterial: null,
    packagingMaterialUoM: null,
    packagingMaterialQuantity: 0,
    packagingMaterialUnitPrice: 0,
    packagingMaterialAmount: 0,
    packagingMaterialTotalWeight: 0,
    saleUoM: null,
    quantity: 0,
    unitPrice: 0,
    amount: 0,
    grossWeight: 0,
    packingMaterialWeight: 0,
    netWeight: 0,
};
exports.dcBaseInitialValue = {
    grnNo: null,
    companyName: null,
    deliveryChallanProducts: [exports.dcProductsInitialValues],
    netProductWeight: null,
    netPackagingMaterialWeight: null,
    totalPackagingMaterialAmount: null,
    totalProductAmount: null,
    totalAmtInWords: null,
    driverName: null,
    licenseNo: null,
    contactNo: null,
    altContactNo: null,
    vehicleNo: null,
    receiverName: null,
    remark: null,
    rmn: null,
    anyAttachment: null,
};
exports.dcTypeCustomerInitialValue = Object.assign(Object.assign({}, exports.dcBaseInitialValue), { poNumber: null, customerName: null, fromLocation: null });
exports.dcTypeStockTransferInitialValue = Object.assign(Object.assign({}, exports.dcBaseInitialValue), { stockTransferType: 'from-cc-to-dc', fromLocation: null, toLocation: null });
//# sourceMappingURL=delivery-challan.initial-value.js.map