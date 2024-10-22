import { LandHoldingStatus, LandStatus } from "../enums";
import { Address } from "./address.interface";

export interface Crops {
    crop: string,
    variety: string,
    noOfPlants: string,
    pruningDate: Date,
    expectedHarvestDate: Date,
    expectedQuantityInTonnes: number
}
export interface Farmer {
    id?: string,
    //Farmer Details
    farmerfName: string,
    farmermName: string,
    farmerlName: string,
    residensialAddress: Address,
    primaryMobileNo: string,
    secondaryMobileNo: string,
    email: string,
    gender: string,
    dob: string,
    farmerType: string;
    idProofNo: string;
    idProofCopy: string;
    howDoYouSell: string;

    //Farm Details
    landHoldingStatus: LandHoldingStatus;
    landStatus: LandStatus;
    farmAddress: Address;
    totalLandArea: number;
    cultivationArea: number;
    sevenTwelveNo: string;
    sevenTwelveCopy: string; 
    farmerPhoto:string;
    farmPhoto:string;
    crops: Crops[];
    dateOfVisit: Date;
    registerBy:string;
    registerDate:Date;
    farmerCode: string;
    farmerGrading: string;
}
