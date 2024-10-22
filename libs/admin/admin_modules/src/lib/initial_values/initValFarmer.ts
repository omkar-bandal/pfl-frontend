import { Crops, Farmer, LandHoldingStatus, LandStatus } from "../models";
import { initValAddress } from "./initValAddress";

const initValCrop: Crops = {
    crop: '',
    variety: '',
    noOfPlants: '',
    pruningDate: new Date(),
    expectedHarvestDate: new Date(),
    expectedQuantityInTonnes: 0,
}
export const initValFarmer: Farmer = {
    //Farmer Details
    farmerfName: '',
    farmermName: '',
    farmerlName: '',
    residensialAddress: initValAddress,
    primaryMobileNo: '',
    secondaryMobileNo: '',
    email: '',
    gender: '',
    dob: '',
    idProofNo: '',
    idProofCopy: '',
    howDoYouSell: '',
    farmerCode: '',
    farmerType: '',
    farmerGrading: '',

    //Farm Details
    landHoldingStatus: LandHoldingStatus.OWNED,
    landStatus: LandStatus.NON_IRRIGATED,
    farmAddress: initValAddress,
    totalLandArea: 0,
    cultivationArea: 0,
    sevenTwelveNo: '',
    sevenTwelveCopy: '',
    farmerPhoto: '',
    farmPhoto: '',
    crops: [initValCrop],
    dateOfVisit: new Date(),
    registerBy: '',
    registerDate: new Date(),
}