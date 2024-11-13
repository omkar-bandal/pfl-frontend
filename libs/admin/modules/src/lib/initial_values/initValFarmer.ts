import { LandHoldingStatus, LandStatus, PostCrops, PostFarmer } from "@prime-fresh/admin_api";
import { initValAddress } from "./initValAddress";

const initValCrop: PostCrops = {
    crop: '',
    variety: '',
    noOfPlants: '',
    pruningDate: new Date(),
    expectedHarvestDate: new Date(),
    expectedQuantityInTonnes: 0,
}
export const initValFarmer: PostFarmer = {
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
    idProofCopy: null,
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
    farmerPhoto: null,
    farmPhoto: null,
    crops: [initValCrop],
    dateOfVisit: new Date(),
    registerBy: '',
    registerDate: new Date(),
}