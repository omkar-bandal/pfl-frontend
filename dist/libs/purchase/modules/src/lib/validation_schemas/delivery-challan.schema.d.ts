import * as yup from 'yup';
export declare const deliveryChallanSchema: yup.ObjectSchema<{
    deliveryCType: string;
    companyName: string;
    partyName: string;
    fromLocation: string;
    toLocation: yup.Maybe<string | undefined>;
    driverName: string;
    contactNo: string;
    altContactNo: string | null | undefined;
    vehicleNo: string;
    receiverName: string;
    rmn: string;
    items: {
        quantity: number;
        uom: string;
        unitPrice: number;
        productName: string;
        grossWeight: number;
        packingMaterialWeight: number;
    }[] | undefined;
    anyAttachment: {} | null | undefined;
}, yup.AnyObject, {
    deliveryCType: undefined;
    companyName: undefined;
    partyName: undefined;
    fromLocation: undefined;
    toLocation: undefined;
    driverName: undefined;
    contactNo: undefined;
    altContactNo: undefined;
    vehicleNo: undefined;
    receiverName: undefined;
    rmn: undefined;
    items: "";
    anyAttachment: undefined;
}, "">;
