"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initValDeliveryChallan = exports.initValMaterials = void 0;
exports.initValMaterials = {
    productName: null,
    count: null,
    size: null,
    uom: null,
    quantity: 0,
    unitPrice: 0,
    amount: 0,
    grossWeight: 0,
    packingMaterialWeight: 0,
    netWeight: 0
};
exports.initValDeliveryChallan = {
    deliveryCType: "customer",
    otherCType: null,
    grnNo: null,
    companyName: null,
    offices: null,
    poNumber: null,
    partyName: null,
    fromLocation: null,
    toLocation: null,
    fromLocationInput: null,
    toLocationInput: null,
    deliveryChallanProducts: [exports.initValMaterials],
    totalAmt: null,
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
//# sourceMappingURL=initValDeliveryChallan.js.map