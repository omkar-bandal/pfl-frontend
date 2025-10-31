import type { Address } from "./address.model";

export type LandStatusType = 'Cultivable' | 'Fallow' | 'Irrigated' | 'Non-Irrigated';

export type LandHoldingStatusType = 'Owned' | 'Leased' | 'Shared' | 'Encumbered';

export interface ICrops {
    id?: string; 
    crop: string | null;
    variety: string | null;
    noOfPlants: number | null;
    pruningDate: string | null;
    expectedHarvestDate: string | null;
    expectedQuantityInTonnes: number | null;
}

export type IFarmer = {
    id: string;
    farmerCode?: string;
    farmerGrading?: string;
    farmerType?: string;
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
    //Farm Details
    landHoldingStatus: LandHoldingStatusType | null;
    landStatus: LandStatusType | null;
    farmAddress: Address;
    totalLandArea: number | null;
    cultivationArea: number | null;
    sevenTwelveNo: string | null;
    sevenTwelveCopy: string | null;
    farmerPhoto: File | null;
    farmPhoto: File | null;
    crops: ICrops[];
    dateOfVisit: string | null;
    registerBy: string | null;
    registerDate: string | null;
}

export interface IFarmerPartialData {
    id: string;
    fullName: string;
    primaryMobileNo: string;
    secondaryMobileNo: string;
    email: string;
    farmerCode: string;
    residensialAddress: Address;
    farmAddress: Address;
}
