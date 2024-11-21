"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryChallanSchema = void 0;
const yup = require("yup");
const contactNo_schema_1 = require("./contactNo.schema");
exports.deliveryChallanSchema = yup.object().shape({
    companyName: yup.string().required('Company name is required'),
    partyName: yup.string().required('Party name is required'),
    fromLocation: yup.string().required('Location is required'),
    toLocation: yup.string().required('Location is required'),
    driverName: yup.string().required('Driver name is required'),
    contactNo: contactNo_schema_1.contactNoSchema,
    vehicleNo: yup.string().required('Vehicle number is required'),
    receiverName: yup.string().required('Receiver name is required'),
    rmn: yup.string().required('RM name is required'),
    items: yup.array().of(yup.object().shape({
        itemName: yup.string().required('Item name is required'),
        itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
        rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
    }))
});
//# sourceMappingURL=delivery-challan.schema.js.map