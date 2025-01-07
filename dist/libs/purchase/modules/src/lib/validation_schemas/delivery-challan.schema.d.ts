import * as yup from 'yup';
export declare const deliveryChallanSchema: yup.ObjectSchema<{
    deliveryCType: string;
    companyName: string;
    partyName: string;
    fromLocation: string;
    toLocation: string;
    driverName: string;
    contactNo: string;
    vehicleNo: string;
    receiverName: string;
    rmn: string;
    items: {
        rate: number;
        itemName: string;
        itemQty: number;
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
    vehicleNo: undefined;
    receiverName: undefined;
    rmn: undefined;
    items: "";
    anyAttachment: undefined;
}, "">;
