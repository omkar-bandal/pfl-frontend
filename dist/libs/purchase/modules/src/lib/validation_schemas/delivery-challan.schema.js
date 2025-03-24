"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryChallanSchema = void 0;
const yup = require("yup");
const modules_1 = require("@prime-fresh/shared/modules");
exports.deliveryChallanSchema = yup.object().shape({
    deliveryCType: yup.string().required('Challan type is required'),
    companyName: yup.string().required('Company name is required'),
    partyName: yup.string().required('Name is required'),
    fromLocation: yup.string().required('Location is required'),
    toLocation: yup.string().notRequired(),
    driverName: yup.string().required('Driver name is required').matches(modules_1.REGEX.IS_STRING, 'Name should only contain alphabets.'),
    contactNo: yup.string().required('Driver contact number is required.').matches(modules_1.REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    altContactNo: yup.string().nullable().matches(modules_1.REGEX.CONTACT_NO, 'Please enter valid contact number.'),
    vehicleNo: yup.string().required('Vehicle number is required').matches(modules_1.REGEX.IS_VEHICLE_NO, 'Please enter valid vehicle number.'),
    receiverName: yup.string().required('Receiver name is required').matches(modules_1.REGEX.IS_STRING, 'Name should only contain alphabets.'),
    rmn: yup.string().required('RM name is required').matches(modules_1.REGEX.IS_STRING, 'Name should only contain alphabets.'),
    items: yup.array().of(yup.object().shape({
        productName: yup.string().required('Product name is required'),
        uom: yup.string().required('UOM is required'),
        quantity: yup.number().required('Quantity is required').positive('Quantity cannot be negative'),
        unitPrice: yup.number().required('Unit price is required').positive('Price cannot be negative'),
        grossWeight: yup.number().required('Gross weight is required').positive('Weight cannot be negative'),
        packingMaterialWeight: yup.number().required('Packing material weight is required').positive('Weight cannot be negative'),
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