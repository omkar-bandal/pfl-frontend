import * as yup from 'yup';
export declare const deliveryChallanSchema: yup.ObjectSchema<{
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
}, yup.AnyObject, {
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
}, "">;
