import * as yup from 'yup';
export declare const dcTypeCustomerSchema: yup.ObjectSchema<{
    companyName: string;
    driverName: string;
    contactNo: string;
    altContactNo: string | null | undefined;
    vehicleNo: string;
    receiverName: string;
    rmn: string;
    items: {
        productName: string;
        uom: string;
        quantity: number;
        unitPrice: number;
        grossWeight: number;
        packingMaterialWeight: number;
    }[] | undefined;
    anyAttachment: {} | null | undefined;
    customerName: string;
    fromLocation: string;
}, yup.AnyObject, {
    companyName: undefined;
    driverName: undefined;
    contactNo: undefined;
    altContactNo: undefined;
    vehicleNo: undefined;
    receiverName: undefined;
    rmn: undefined;
    items: "";
    anyAttachment: undefined;
    customerName: undefined;
    fromLocation: undefined;
}, "">;
export declare const dcTypeStockTransferSchema: yup.ObjectSchema<{
    companyName: string;
    driverName: string;
    contactNo: string;
    altContactNo: string | null | undefined;
    vehicleNo: string;
    receiverName: string;
    rmn: string;
    items: {
        productName: string;
        uom: string;
        quantity: number;
        unitPrice: number;
        grossWeight: number;
        packingMaterialWeight: number;
    }[] | undefined;
    anyAttachment: {} | null | undefined;
    stockTransferType: string;
    fromLocation: string;
    toLocation: string;
}, yup.AnyObject, {
    companyName: undefined;
    driverName: undefined;
    contactNo: undefined;
    altContactNo: undefined;
    vehicleNo: undefined;
    receiverName: undefined;
    rmn: undefined;
    items: "";
    anyAttachment: undefined;
    stockTransferType: undefined;
    fromLocation: undefined;
    toLocation: undefined;
}, "">;
