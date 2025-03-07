import { PostCrops } from './crop.type';
import { Address } from '../../../../../../common_api/src/index.ts';

export type PostFarmer = {
    farmerfName: string | null;
    farmermName: string | null;
    farmerlName: string | null;
    residensialAddress: Address;
    primaryMobileNo: string | null;
    secondaryMobileNo: string | null;
    email: string | null;
    gender: string | null;
    dob: string | null;
    idProofNo: string | null;
    idProofCopy: File | null;
    howDoYouSell: string | null;
    landHoldingStatus: string | null;
    landStatus: string | null;
    farmAddress: Address;
    totalLandArea: number | null;
    cultivationArea: number | null;
    sevenTwelveNo: string | null;
    sevenTwelveCopy: string | null;
    farmerPhoto: File | null;
    farmPhoto: File | null;
    crops: PostCrops[];
    dateOfVisit: string | null;
    registerBy: string | null;
    registerDate: string | null;
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
