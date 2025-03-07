import * as Yup from 'yup';
export declare const farmerValidationSchema: Yup.ObjectSchema<{
    farmerfName: string;
    farmermName: string | null | undefined;
    farmerlName: string;
    residensialAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    primaryMobileNo: string | undefined;
    secondaryMobileNo: string | null | undefined;
    email: string | undefined;
    dob: Date;
    farmAddress: {
        address2?: string | null | undefined;
        address1: string;
        location: string;
        city: string;
        state: string;
        pincode: string;
    };
    totalLandArea: number | null | undefined;
    cultivationArea: number | null | undefined;
    crops: {
        noOfPlants?: number | null | undefined;
        crop: string;
        pruningDate: Date;
        expectedHarvestDate: Date;
        expectedQuantityInTonnes: number;
    }[] | undefined;
}, Yup.AnyObject, {
    farmerfName: undefined;
    farmermName: undefined;
    farmerlName: undefined;
    residensialAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    primaryMobileNo: undefined;
    secondaryMobileNo: undefined;
    email: undefined;
    dob: undefined;
    farmAddress: {
        address1: undefined;
        address2: undefined;
        location: undefined;
        city: undefined;
        state: undefined;
        pincode: undefined;
    };
    totalLandArea: undefined;
    cultivationArea: undefined;
    crops: undefined;
}, "">;
