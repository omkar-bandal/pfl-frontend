import { ICrops, IFarmer } from "../models"
import { initValAddress } from "./address.initial-value"

export const initValCrop: ICrops = {
    crop: null,
    variety: null,
    noOfPlants: null,
    pruningDate: null,
    expectedHarvestDate: null,
    expectedQuantityInTonnes: null
}

export const initValFarmer: Omit<IFarmer, 'id'> = {
    //Farmer Details
    farmerfName: null,
    farmermName: null,
    farmerlName: null,
    residensialAddress: initValAddress,
    primaryMobileNo: null,
    secondaryMobileNo: null,
    email: null,
    gender: null,
    dob: null,
    idProofNo: null,
    idProofCopy: null,
    howDoYouSell: null,

    //Farm Details
    landHoldingStatus: null,
    landStatus: null,
    farmAddress: initValAddress,
    totalLandArea: null,
    cultivationArea: null,
    sevenTwelveNo: null,
    sevenTwelveCopy: null,
    farmerPhoto: null,
    farmPhoto: null,
    crops: [initValCrop],
    dateOfVisit: null,
    registerBy: null,
    registerDate: null,
}