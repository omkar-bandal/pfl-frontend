"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryChallanSchema = void 0;
const yup = require("yup");
const contactNo_schema_1 = require("./contactNo.schema");
exports.deliveryChallanSchema = yup.object().shape({
    deliveryCType: yup.string().required('Challan type is required'),
    companyName: yup.string().required('Company name is required'),
    partyName: yup.string().required('Party name is required'),
    fromLocation: yup.string().required('Location is required'),
    toLocation: yup.string().notRequired(),
    driverName: yup.string().required('Driver name is required'),
    contactNo: contactNo_schema_1.contactNoSchema,
    vehicleNo: yup.string().required('Vehicle number is required'),
    receiverName: yup.string().required('Receiver name is required'),
    rmn: yup.string().required('RM name is required'),
    items: yup.array().of(yup.object().shape({
        itemName: yup.string().required('Item name is required'),
        itemQty: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
        rate: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
    })),
    anyAttachment: yup.mixed().nullable()
        .test('fileFormat', 'Invalid image format (only jpg, jpeg, png allowed)', (value) => {
        if (!value)
            return true; // No file selected
        const file = value;
        const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
        return allowedFormats.includes(file.type);
    })
        .test('fileSize', 'Image is too large (max 1MB)', (value) => {
        if (!value)
            return true; // No file selected
        const file = value;
        const maxSizeInBytes = 1 * 1024 * 1024; // 1 MB
        return file.size <= maxSizeInBytes;
    }),
});
//# sourceMappingURL=delivery-challan.schema.js.map