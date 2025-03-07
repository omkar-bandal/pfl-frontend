import { initValAddress } from "@prime-fresh/admin/modules"
import { PostFarmer } from "@prime-fresh/admin_api"

const today = new Date();
const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`

const initValCrop = {
    crop: '',
    variety: '',
    noOfPlants: 0,
    pruningDate: formattedDate,
    expectedHarvestDate: formattedDate,
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

    //Farm Details
    landHoldingStatus: '',
    landStatus: '',
    farmAddress: initValAddress,
    totalLandArea: 0,
    cultivationArea: 0,
    sevenTwelveNo: '',
    sevenTwelveCopy: '',
    farmerPhoto: null,
    farmPhoto: null,
    crops: [initValCrop],
    dateOfVisit: formattedDate,
    registerBy: '',
    registerDate: formattedDate,
}