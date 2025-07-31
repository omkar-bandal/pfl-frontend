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
    primaryMobileNo: string;
    secondaryMobileNo: string | null | undefined;
    email: string | null | undefined;
    dob: Date | null | undefined;
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
    farmerPhoto: File | null | undefined;
    farmPhoto: File | null | undefined;
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
    farmerPhoto: undefined;
    farmPhoto: undefined;
    crops: undefined;
}, "">;
