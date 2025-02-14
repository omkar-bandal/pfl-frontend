import { PostCrops } from './crop.type';
import { Address } from '../../../../../../common_api/src/index.ts';

export type PostFarmer = {
    farmerfName: string;
    farmermName: string;
    farmerlName: string;
    residensialAddress: Address;
    primaryMobileNo: string;
    secondaryMobileNo: string;
    email: string;
    gender: string;
    dob: string;
    idProofNo: string;
    idProofCopy: File | null;
    howDoYouSell: string;
    landHoldingStatus: string;
    landStatus: string;
    farmAddress: Address;
    totalLandArea: number;
    cultivationArea: number;
    sevenTwelveNo: string;
    sevenTwelveCopy: string;
    farmerPhoto: File | null;
    farmPhoto: File | null;
    crops: PostCrops[];
    dateOfVisit: string;
    registerBy: string;
    registerDate: string;
};
export type GetFarmer = {
    id: string;
    farmerCode: string;
    farmerGrading: string;
    farmerType: string;
} & PostFarmer;
export type GetAllFilteredFarmerData = {
    id: string;
    fullName: string;
    primaryMobileNo: string;
    secondaryMobileNo: string;
    email: string;
    farmerCode: string;
    residensialAddress: Address;
    farmAddress: Address;
};
